---
title: Installazione
sidebar_position: 1
---

# Installazione

:::warning
**Informazione importante riguardante build di terze parti di LiveContainer**

Abbiamo recentemente scoperto la comparsa di certe build di terze parti closed-source di LiveContainer. Sappi che tutte le tue app sono installate tramite LiveContainer, il che significa che queste build di terze parti **hanno accesso completo ai tuoi dati, comprese info sensibili come portachiavi e credenziali di accesso**. 

Ad esempio, se accedi a YouTube tramite LiveContainer, la build di terze parti avrà completo accesso al tuo account YouTube (Google). Evita di usare queste build di terze parti a meno che tu non abbia completa fiducia negli sviluppatori o a meno che tu non sia in grado di revisionare e compilare il codice.

Inoltre, nota che non forniamo supporto per problemi relativi a queste build di terze parti. 
:::

:::note
È consigliato seguire gli step seguenti per configurare la modalità JIT-Less per usare LiveContainer senza JIT. Se riscontri qualche problema, controlla [#265](https://github.com/LiveContainer/LiveContainer/issues/265) prima di segnalarlo.
:::

## Requisiti

- iOS/iPadOS 15+
   + Il multitasking richiede iOS/iPadOS 16.0+
- AltStore 2.0+ / SideStore 0.6.0+

## Download
### Stable:
<a href="https://celloserenity.github.io/altdirect/?url=https://raw.githubusercontent.com/LiveContainer/LiveContainer/refs/heads/main/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/AltSource_Blue.png?raw=true" alt="Aggiungi AltSource" width="200" />
</a>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Download .ipa" width="200" />
</a>

### Nightly:
<a href="https://celloserenity.github.io/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/AltSource_Blue.png?raw=true" alt="Aggiungi AltSource" width="200" />
</a>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Download .ipa" width="200" />
</a>

## Installazione
- È consigliato abilitare la modalità JIT-Less, dove LiveContainer firma le app col tuo certificato da AltStore/SideStore (vedi le istruzioni sotto).

### Modalità JIT-Less (senza JIT \[consigliato])
Puoi saltare questi step se non ti scoccia abilitare JIT per ogni app ogni volta, ma ciò non è consigliato. Senza JIT, le app devono essere codesigned, il che richiede prendere il certificato e la password da AltStore/SideStore.

:::note
Modalità JIT-Less non significa che non puoi abilitare JIT per le tue app. Significa invece che non è richiesta JIT per lanciare un'app. Se vuoi usare JIT, segui le istruzioni sotto nella sezione "Supporto JIT".
Se qualcosa va storto, controlla "Diagnosi modalità JIT-Less" per più info.
:::

#### Setup (Richiede AltStore 2.2.1+ / SideStore 0.6.2+ \[consigliato])
- Apri le impostazioni in LiveContainer
- Tocca "Importa Certificato da AltStore/SideStore"
- Si aprirà AltStore/SideStore e ti chiederà di esportare il certificato. Se non vedi il banner, tieni AltStore/SideStore aperto in background e tocca di nuovo "Importa Certificato da AltStore/SideStore".
- Tocca "Esporta" in SideStore o imposta una password e esporta in AltStore
- Tocca "Diagnosi modalità JIT-Less" e poi "Test modalità JIT-Less"
- Se dice "Test modalità JIT-Less passato" hai completato gli step correttamente!
:::note
Se reinstalli AltStore/SideStore utilizzando AltServer, dovrai eseguire questi step di nuovo o rischierai di dover reinstallare le tue app.
:::

### Installare le App
- Apri LiveContainer, tocca sull'icona del più in alto a sinistra e seleziona il file IPA da installare.
- Scegli l'app che vuoi eseguire.
- Puoi premere a lungo un'app per gestirla.

### Prossimi step

Una volta che i fondamenti funzionano, segui le guide qui sotto:

- [LiveContainer Multipli](/docs/guides/multiple-livecontainers) — esegui più container e condividi le app tra di essi.
- [Supporto JIT](/docs/guides/jit-support) — configura automaticamente JIT enabler o script.
- [Setup e Diagnosi JIT-Less](/docs/faq/jit-less-mode-setup) — verifica certificati importati e risolvi problemi di firma.
- [Tweaks](/docs/guides/tweaks) — inietta tweak CydiaSubstrate globalmente o per app.
- [Multitask](/docs/guides/multitask) — gestisci più app in finestre ridimensionabili.
- [Blocca e Nascondi App](/docs/guides/lock-app) — proteggi app sensibili con Face ID o Strict Hiding mode.
