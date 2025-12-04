---
title: 5. Usare Guest App
sidebar_position: 8
---

# 5. Usare Guest App

## 5.1. Perché non vedo le app nel secondo LiveContainer?

Devi convertire l'app a Shared App.
Tieni premuto l'app -> Impostazioni -> Convert to Shared App

## 5.2. Come posso aprire un'app in entrambi i LiveContainer? / Come posso usare la funzione multi-account?

1. Crea una nuova data folder: Tieni premuto l'app -> Impostazioni -> Containers -> New data folder
2. Tieni premuto l'app -> Impostazioni -> Seleziona un container -> Run

:::note
Puoi creare fino a 128 container per app dopo la 3.2.58 e 3 prima. Puoi eseguire la stessa app in diversi Container in entrambi i LiveContainer nello stesso momento.
:::

## 5.3. Come posso aprire un link/pagina web/url in un'app guest?

Puoi condividere una pagina web a LiveContainer utilizzando [questa shortcut](https://www.icloud.com/shortcuts/44ea82ce7ed8469ea24198c375db09a0). Assicurati di aggiungerla nei "Preferiti" nel foglio condivisione.

## 5.4. Non riesco a selezionare un file / Il file picker non funziona / L'app non va se non attivo le notifiche

Tieni premuto l'app -> Impostazioni -> Attiva "Fix File Picker & Local Notification"

## 5.5. Come modificare le impostazioni dell'app che dovrebbero trovarsi nelle impostazioni iOS

Tieni premuto l'app -> Impostazioni -> (nome container) -> Container Preferences

## 5.6. "Safari non può aprire questa pagina perché l'indirizzo non è valido" quando accedi tramite Safari

Controlla questa issue: [#242](https://github.com/LiveContainer/LiveContainer/issues/242).

## 5.7. Come posso usare i widget/plugin ecc.?

Non puoi. Richiedono degli app id extra. Puoi integrare il plugin con LiveContainer se vuoi davvero usarlo ma farlo ti costerà 1 app id. 

## 5.8 Come posso attivare JIT per le guest app?

LiveContainer integra il supporto con i principali JIT enabler. Puoi impostarlo nelle impostazioni LiveContainer -> sezione JIT. 
Contrassegna un'app in JIT: tieni premuto l'app -> impostazioni -> abilita "Launch with JIT". LiveContainer aspetterà l'avvio del JIT e proverà a contattare il JIT enabler che hai configurato.

:::note
StikDebug è disponibile in LiveContainer 3.3.51+
:::

Per *StikDebug* (Consigliato), installa StikDebug come app separata e nelle impostazioni LiveContainer, scegli "StikDebug" in JIT enabler.

Per *SideJITServer/JITStreamer 2.0*, inserisci sia l'indirizzo che l'UDID del dispositivo.

### Il modo corretto per abilitare JIT per un'app dentro LiveContainer

0. Non attivare JIT per LiveContainer per ora
1. Configura il JIT enabler come sopra
2. Attiva "Launch with JIT" come sopra
3. Tocca "Run"
4. Se il tuo JIT enabler non supporta l'attivazione automatica, dovrai attivare JIT per LiveContainer dal tuo JIT enabler mentre il prompt "waiting for JIT" è visibile.
