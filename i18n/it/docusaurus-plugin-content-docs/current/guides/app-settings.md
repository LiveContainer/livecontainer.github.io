# Impostazioni App

Dopo aver installato un'app, puoi modificare le impostazioni di ciascuna app premendo a lungo la relativa icona su LiveContainer. Questo permette di personalizzare il comportamento dell'app con l'ambiente di LiveContainer.

## DATI

### App Condivisa

Convertire un'app ad app condivisa consente di eseguire l'app in diverse istanze di LiveContainer. Quando vuoi cancellare un'app è consigliato convertirla ad app privata.

## Container

Puoi modificare ciascun container premendo il suo id.

Per aprire un'app in due container o usare la funzionalità multi-account dovrai impostare una "Nuova cartella dati" e passare alla cartella dati premendo a lungo sull'icona dell'app su LiveContainer.

### Avvia con JIT

Questa opzione ti permette di eseguire l'app con JIT attiva.

### Blocca App

Blocca App

Nascondi App: Per nascondere completamente le applicazioni, abilita la modalità Strict Hiding nelle impostazioni.

Strict Hiding Mode

### Signer

Quest'opzione è stata rimossa nella versione 3.3.55, ora `ZSign` è il signer di default.

### Lingua

Così come l'opzione nelle impostazioni di sistema, qui puoi cambiare la lingua dell'app.

## FIXES

### Ripara Selettore File e Notifiche Locali

Se incontri i seguenti problemi, prova ad abilitare queste opzioni:

- Non riesci a selezionare un file
- Il Selettore File non funziona
- L'app non va avanti senza abilitare le notifiche

### Ripara schermata nera

Se un'app mostra una schermata nera e crasha dopo 10s, prova ad attivare questa opzione.

:::note
È valida su LiveContainer 3.1.55+
:::

Il fix della schermata nera non viene applicato automaticamente dopo la 3.1.55. Puoi attivarlo Premendo a lungo l'app -> Impostazioni -> Attiva "Ripara Schermata Nera"

### Nascondi LiveContainer da Dyld Api

Può aiutare a bypassare l'injection detection di alcune app.

### Non iniettare TweakLoader

Può aiutare a bypassare l'injection detection di alcune app.

### Falsifica Versione SDK

Falsifica Versione SDK impone alle librerie di sistema di utilizzare la versione SDK dell'app.

### Sistema Selettore File (Legacy)

Ripara il selettore file che non risponde quando clicchi 'apri' forzando l'app a copiare i file selezionati. Puoi vedere i file importati nella cartella 'Inbox' nella cartella dati dell'app.

### Bypassa AssertBarrierOnQueue

~~Può evitare che alcuni giochi crashino, ma li rende anche instabili.~~

Opzione rimossa nella versione 3.3.55.

### Firma Forzata

Se l'app non si avvia con l'errore 'Firma non valida', prova a firmarla di nuovo. Se continua a non funzionare, rinnova il certificato JIT-Less.
