---
title: 6. Pagina Diagnosi JIT-Less 
sidebar_position: 9
---

# 6. Pagina Diagnosi JIT-Less

<img width="300" alt="Image" src="https://github.com/user-attachments/assets/03f6392d-1a2a-4e8b-b03a-e6e7568346d2" />

:::note
Questa pagina esiste su LiveContainer 3.1.51+
:::

Se hai configurato correttamente la modalità JIT-Less, la tua pagina "Modalità JIT-Less Diagnose" dovrebbe apparire come lo screenshot qui sopra. L'info più importante è "Data Ultimo Aggiornamento Del Certificato". Questo campo dovrebbe cambiare se riapri lo store. Altrimenti, segui le istruzioni di seguito per risolvere.

## 6.1. App Group ID, App Group Accessible, Store

Il campo "App Group ID" dovrebbe terminare con gli stessi 10 caratteri del "Bundle Identifier". "App Group Accessible" dovrebbe essere "Sì" e "Store" dovrebbe mostrare correttamente il tuo store.

> Per esempio, se il tuo Bundle Identifier è `com.kdt.livecontainer.A1B2C3D4E5`, il tuo app group id deve essere `group.com.SideStore.SideStore.A1B2C3D4E5` se usi SideStore, o `group.com.SideStore.SideStore.A1B2C3D4E5` se usi AltStore.

Se dice solo `group.com.SideStore.SideStore` o `Unknown`, allora c'è qualcosa che non va col setup di SideStore. Controlla che:

- SideStore sia installato tramite AltServer
- LiveContainer sia installato direttamente tramite SideStore/AltStore
- Non provare a installare LiveContainer da AltStore PAL
- L'account usato per installare SideStore e LiveContainer sia lo stesso. Puoi verificarlo andando nelle impostazioni iOS -> Generali -> VPN e Gestione Dispositivo -> (il nome del tuo account). Controlla che LiveContainer e SideStore siano sotto lo stesso account.

:::note
> "Entitlement File" esiste in 3.2.51+
:::

Se tutto è corretto ma App Group è ancora non accessibile, tocca "Entitlement File" e controlla l'entitlement estratto dall'eseguibile di LiveContainer. Un entitlement corretto dovrebbe essere simile a questo:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
 <key>application-identifier</key>
 <string>A1B2C3D4E5.com.kdt.livecontainer.A1B2C3D4E5</string>
 <key>com.apple.developer.team-identifier</key>
 <string>A1B2C3D4E5</string>
 <key>com.apple.security.application-groups</key>
 <array>
  <string>group.com.rileytestut.AltStore.A1B2C3D4E5</string>               <--- Importante!
  <string>group.com.SideStore.SideStore.A1B2C3D4E5</string>               <--- Importante!
 </array>
 <key>get-task-allow</key>
 <true/>
 <key>keychain-access-groups</key>
 <array>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.1</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.2</string>
 </array>
</dict>
</plist>

```

La parte più importante è `com.apple.security.application-groups`, che determina se LiveContainer può accedere all'app group di SideStore.
Questa parte deve esistere e il suo contenuto deve essere simile a `group.com.rileytestut.AltStore.A1B2C3D4E5` e `group.com.SideStore.SideStore.A1B2C3D4E5`. Se non esiste o è simile a `group.com.SideStore.SideStore.A1B2C3D4E5.A1B2C3D4E5`, allora è un bug di SideStore, non di LiveContainer. L'unica cosa che puoi fare è rimuovere sia LiveContainer che SideStore per poi reinstallarli e vedere se il problema si risolve.

È stato segnalato che se l'entitlement di LiveContainer è incorretto non puoi attivare/disattivare le app in SideStore. **Non segnalare issue sugli entitlement incorretti visto che non è un problema di LiveContainer.**

## 6.2. Patch Rilevata

:::note
Assicurati che App Group ID, App Group Accessible e Store siano corretti prima di procedere.
:::

Dovrebbe mostrare "Sì". Altrimenti, chiudi lo store dall'app switcher, riaprilo e aggiorna la pagina di diagnosi.
Se continua a non andare, applica di nuovo la patch allo store.

## 6.3. Dati del Certificato / Password Trovati, Data ultimo aggiornamento del certificato

:::note
Assicurati che 1 e 2 siano corretti prima di procedere.
:::

Se hai patchato correttamente lo store, Dati del Certificato / Password Trovati deve essere "Sì" se refreshi la pagina di diagnosi, e la "Data ultimo aggiornamento del certificato" dovrebbe mostrare la data di quando hai aperto lo store l'ultima volta.

Se Dati del Certificato / Password Trovati è "Sì", ma "Data ultimo aggiornamento del certificato" è sconosciuta e le app funzionano correttamente, potresti aver aggiornato da versioni precedenti alla 3.1.51, patcha di nuovo il tuo store e tutto dovrebbe essere mostrato correttamente.
