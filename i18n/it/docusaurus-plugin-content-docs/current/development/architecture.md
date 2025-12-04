---
title: Architettura di Sistema
sidebar_position: 2
---

# Overview dell'architettura di LiveContainer

LiveContainer è più di una shell app - è un piccolo runtime che ri-ospita app iOS arbitrarie dentro il suo sandbox, livella la tweak injection e offre il multitasking più l'esecuzione JIT-Less. Questa pagina riassume come è organizzata la codebase moderna e come il launcher esegue i processi.

## Struttura del Progetto

### Eseguibile principale (`LiveContainer`)
- Punto d'ingresso per l'intera piattaforma. Gestisce il bootstrapping, la gestione dei dati, la vita dei container ed esegue istanze di LiveProcess per i guest.
- Quando non ci sono guest in esecuzione, presenta l'interfaccia SwiftUI (`LiveContainerSwiftUI`).

### LiveContainerSwiftUI
- Layer UI SwiftUI contribuito da [@hugeBlack](https://github.com/hugeBlack).
- Ospita gli asset delle lingue (`Localizable.xcstrings`). Unisciti al nostro [progetto Crowdin](https://crowdin.com/project/livecontainer) per aiutarci a tradurre le stringhe.

### LiveProcess
- Eseguibile leggero che contiene il guest loader. Si avvia con gli stessi entitlements ma con un bundle id diverso per consentire il multitasking e la PID-based JIT.
- Responsabile del patching del guest binary, configurazione dyld, tweak injection e del trasferimento del controllo all'entry point dell'app.

### MultitaskSupport
- Implementa il sistema delle floating window in app e l'integrazione nativa delle finestre di iPadOS.
- Comunica con il container principale per mantenere lo stato dell'app e la gestione dell'input sincronizzate tra diverse istanze di LiveProcess.

### SideStore helpers
- Codice che integra le API del refresh/JIT di SideStore. Fornisce il refresh in background del certificato, l'aggiornamento del source e la gestione dell'URL scheme per le installazioni da SideStore.

### TweakLoader
- Substrate loader minimalista integrato in LiveContainer.
- Iniettato in ogni guest tramite un nuovo comando; può essere cambiato sostituendo il symlink `TweakLoader.dylib`. 

### ZSign
- Signer integrato (forkato da [zhlynn/zsign](https://github.com/zhlynn/zsign) tramite [Feather](https://github.com/khcrysalis/Feather)).
- LiveContainer mantiene un branch personalizzato legato ai suoi requisiti di entitlements e multi-container. 

### Librerie di terze parti
- `fishhook`, `litehook`, e `OpenSSL` sono presenti come git submodule. Permettono l'hooking e la crittografia a basso livello del loader e del signer.

## Come funziona

### Preparare l'eseguibile guest
- Riscrivi il segmento `__PAGEZERO` (`vmaddr = 0xFFFFC000`, `vmsize = 0x4000`) cosicché il binary possa essere mappato in LiveProcess.
- Cambia il Mach-O type da `MH_EXECUTE` a `MH_DYLIB`.
- Inietta un comando che carica `TweakLoader.dylib` prima che `UIApplicationMain` venga eseguito.

### Patching `@executable_path`
- Le build recenti sfruttano `dyld4::APIs::_NSGetExecutablePath` usando litehook/fishhook.
- L'hook chiama l'implementazione originale, rendendo scrivibile `config.process.mainExecutablePath` e cambia il percorso per far sì che il guest risolva le suo stesse bundle resources.
- Il vecchio patching basato sulla SIGSEGV non è più utilizzato ma è ancora documentato nella [repo principale](https://github.com/LiveContainer/LiveContainer/blob/main/README.md).

### Patching `NSBundle.mainBundle`
- `NSBundle.mainBundle` è overridden così le richieste API ricevono il bundle guest anziché quello di LiveContainer.

### Bypassare Library Validation / Code Signing
- Quando la JIT è disponibile, LiveContainer chiede all'enabler configurato di svegliare la signature check dell'eseguibile.
- Nella modalità JIT-Less, ZSign ri-firma ogni guest coi tweak usando il certificato importato da AltStore/SideStore.
- Il bypass è basato sul [Restoring Dyld Memory Loading](https://blog.xpnsec.com/restoring-dyld-memory-loading).

### Eseguire l'app
- LiveProcess `dlopen` è il binario guest patchato.
- `TweakLoader` carica CydiaSubstrate e le cartelle tweak per guest.
- Il loader risolve l'entry point del programma e passa ad esso; poi il guest chiama `UIApplicationMain` come sempre. 

### Supporto al multi account e semi-separazione del keychain
- Vengono definiti [128 keychain access groups](https://github.com/LiveContainer/LiveContainer/blob/main/entitlements.xml). I container scelgono a caso i gruppi per ridurre le collisioni tra app, abilitando accessi isolati per container.

## Limitazioni

- Gli entitlement del guest non sono copiati all'host. Valgono solo gli entitlement base garantiti a LiveContainer.
- I permessi delle app (fotocamera, foto, ecc.) sono globali per tutti i guest.
- I container condividono lo stesso sandbox, quindi un guest malevolo può leggere i file di un altro guest.
- Le app extension non possono essere registrate (la SpringBoard non le vede e gli App ID sono limitati).
- In alcuni casi il multitasking blocca le tastiere hardware o l'input di iPhone Mirroring.
- Le notifiche push remote e gli URL scheme personalizzati spesso falliscono perché LiveContainer non può registrarli con la SpringBoard.
