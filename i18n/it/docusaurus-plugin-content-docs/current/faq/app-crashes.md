---
title: 4. App Crash
sidebar_position: 7
---

# 4. App Crash

## 4.1. could not register fairplay decryption, mremap_encrypted() => -1

L'app non è decriptata. Trova un ipa decriptato.

## 4.2. App returned from its main function with code 0

L'ipa è in un formato non valido, trovane un altro. Se provi ad eseguire il sideload di questo ipa su SideStore/AltStore, mostrerà l'errore "This app is in an invalid format".

## 4.3. L'app mostra uno schermo nero e crasha dopo 10s

:::note
È valido su LiveContainer 3.1.55+
:::

Il fix dello schermo nero non è attivato automaticamente dopo la 3.1.55. Puoi abilitarlo: Premi a lungo l'app -> Impostazioni -> Abilita "Black Screen Fix"

## 4.4. L'App crasha ancora

Per altre app:

1. Cerca nelle issues se c'è una soluzione.
2. Esegui direttamente il sideload dell'app in SideStore/AltStore e vedi se funziona. Se no, cerca un'ipa funzionante.

Se non trovi una soluzione, inoltra una issue di compatibilità. Assicurati di includere:

1. **Il nome esatto dell'App**, non scrivere solo "crash app" o "l'app X non funziona"
2. Cerca i crash report in Impostazioni iOS -> Privacy & Security -> Analytics & Improvements -> Analytics Data -> cerca LiveContainer 
3. Se l'app è open source includi un link alla sua repo
4. La **build esatta di LiveContainer**, es. non solo "3.1.0", ma "3.1.0 c586e79". Puoi trovarla in fondo al tab impostazioni di LiveContainer.

Sfortunatamente, visto che la maggior parte delle app è closed source, è molto difficile per noi trovare il problema.
