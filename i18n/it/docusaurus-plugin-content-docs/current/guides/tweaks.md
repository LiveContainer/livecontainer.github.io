---
title: Tweaks
sidebar_position: 3
---

# Usare i Tweak

LiveContainer offre un modo per iniettare i tweak senza iniettarli prima nell'app. L'iniezione diretta è comunque consigliata visto che non tutti i tweak funzionano correttamente con il TweakLoader di LiveContainer.

LiveContainer ha un suo TweakLoader, che carica automaticamente CydiaSubstrate e i tweak. TweakLoader è iniettato in ogni app che installi. Puoi sovrascrivere il symlink TweakLoader.dylib con la tua implementazione se vuoi.

I file `.dylib` nella cartella Tweak sono globali, sono caricati in tutte le app. Puoi creare cartelle di tweak specifiche per ogni app e switchare tra esse istantaneamente.

Per installare tweak, puoi usare il tweak manager integrato in LiveContainer, che firma automaticamente i tweak all'importazione. Altrimenti, puoi aggiungerli manualmente e poi usare il tweak manager per firmarli.

## Aggiungere i Tweak

:::note
La gestione dei tweak è disponibile solo nel LiveContainer principale (Blu) e per app private. Se vuoi caricare un tweak in un'app condivisa, convertila ad app privata prima di aggiungerle dei tweak. Puoi rinconvertirla dopo che hai finito e i tweak funzioneranno.
:::

1. Vai nel tab tweak -> tocca il tasto più
  - se vuoi iniettare il tweak (globale) a tutte le app in LiveContainer, tocca importa tweak.
  - Se vuoi iniettare il tweak in un'app specifica, tocca crea una nuova cartella
2. Per i tweak globali, hai finito, puoi eseguire l'app e verificare se il tweak si è caricato correttamente.
3. Per tweak specifici per app, vai nella cartella che hai creato e tocca il bottone più -> importa tweak
4. Per tweak specifici per app, tieni premuto l'app -> impostazioni -> tocca la cartella tweak -> scegli la cartella che hai creato

## Rimuovere i Tweak

Vai nel tab Tweak -> trova il tweak/cartella -> scorri a sinistra -> elimina

## Rinominare i Tweak

Vai nel tab Tweak -> trova il tweak/cartella -> tieni premuto -> rinomina

## Firma dei Tweak

La firma dei Tweak è gestita automaticamente da LiveContainer. I tweak verranno rifirmati quando viene cambiata o quando la firma scade. Puoi rifirmarli manualmente premendo il tasto firma vicino al tasto più.
