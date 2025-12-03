---
title: Supporto JIT
sidebar_position: 2
---

# Supporto JIT

LiveContainer si integra con diversi JIT enabler per poter eseguire binari non firmati su iOS 17.4-18.x e beta successive (incluso lo script workflow di iOS 26+). Puoi configurare tutto in **Impostazioni → JIT**.

## Contrassegna app che richiedono JIT

1. Tieni premuto un'app → **Impostazioni** → abilita **Esegui con JIT**.
2. Apri LiveContainer, ma **non** abilitare ancora JIT.
3. Configura uno degli enabler sotto.
4. Assicurati che i requisti del JIT enabler siano soddisfatti (VPN/Mac collegato/ecc.).
5. Tocca **Esegui** sull'app. LiveContainer aspettare nello stato "Waiting for JIT" finché l'enabler risponde.
6. Se l'enabler non può collegarsi automaticamente, passa ad esso e abilita la JIT manualmente intanto che il prompt rimane aperto.

## Enabler Built-in

### StikDebug (prima StikJIT, consigliato)

[StikDebug](https://apps.apple.com/us/app/stikdebug/id6744045754) fornisce il setup più comodo su iOS 17.4+ e su iOS 26+.

1. Installa StikDebug e importa il pairing file generato da AltStore/SideStore/AltServer.
2. Nelle impostazioni dell'app attiva **Esegui con JIT**.
3. Vai in **Impostazioni → JIT Enabler** e scegli **StikDebug**. Se vuoi usare l'automation script di iOS 26+, incollalo nel campo di testo.
4. Esegui l'app. LiveContainer chiederà automaticamente a StikDebug di collegarsi. Se la richiesta fallisce, apri StikDebug e premi "Enable JIT per LiveContainer" mentre il prompt è ancora visibile.

### SideStore (0.6.2+)

SideStore ha delle API JIT che LiveContainer è in grado di chiamare. Visto che l'URL scheme non apre automaticamente LiveContainer, dovrai terminare il procedimento manualmente:

1. Seleziona **SideStore** come enabler.
2. Quando appare "Waiting for JIT", passa a SideStore → **My Apps**.
3. Assicurati che la VPN di SideStore sia connessa (o che il trucco Modalità Aereo + Wi-Fi sia attivo).
4. Tieni premuto LiveContainer → **Abilita JIT**. Torna su LiveContainer una volta che SideStore dà esito positivo.

### SideJITServer

[SideJITServer](https://github.com/nythepegasus/SideJITServer) ti permette di eseguire il tuo pairing server personale.

1. Deploy SideJITServer e segnati l'endpoint HTTP con l'UDID del tuo device. 
2. In LiveContainer entra l'indirizzo del server e l'UDID in **Impostazioni → JIT Enabler → SideJITServer**.
3. Esegui l'app. LiveContainer contatterà il tuo server automaticamente.

### Script AltStore/AltServer

Le build più recenti includono un field automation dove puoi incollare script JIT di AltStore/AltServer (include le varianti per iOS 26+ della community). Questi script di solito si aspettano che il device sia sulla stessa rete di AltServer.

1. Copia lo script dalla wiki o Discord di AltStore.
2. Incollalo nel field dentro alle impostazioni JIT.
3. Esegui l'app contrassegnata con "Esegui con JIT". LiveContainer eseguirà lo script e mostrerà l'output nel prompt.

## Risoluzione di Problemi

- Usa la pagina **Diagnosi modalità JIT-Less** (Impostazioni → Diagnosi modalità JIT-Less) per verificare i certificati e il portachiavi prima di dare la colpa a JIT.
- Se la pagina di attesa scompare immediatamente, assicurati che l'enabler sia selezionato e che LiveContainer abbia il permesso di aprire il suo URL scheme.
- LiveContainer salva i log in `Impostazioni → Gestione Dati → Esporta Log`; includili quando segnali un problema.
- Ricordati che le finestre in multitasking necessitano di enabler che possono collegarsi tramite PID (StikDebug lo supporta; l'abilitazione manuale di SideStore no).
