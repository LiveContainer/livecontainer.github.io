# Multitask

LiveContainer ora supporta il vero multitasking sulle ultime versioni di iOS - senza necessità di jailbreak o exploit. Sfruttando il lavoro di reverse engineering di Duy Tran su FrontBoardAppLauncher e utilizzando multi-process app extensions, LiveContainer permette di eseguire app in processi e finestre separate, bypassando il limite di 3 app.

Puoi eseguire più app contemporaneamente in finestre virtuali. Queste finestre possono essere ridimensionate, scalate e anche visualizzate tramite il Picture-in-Picture (PiP) nativo. Sugli iPad le app possono essere eseguite in finestre native, mostrando ogni app come finestra a sé. Se vuoi, puoi scegliere di eseguire un'app di default in modalità multitasking nelle impostazioni.

## Come utilizzarlo

Prima di iniziare, considera che questa funzionalità è ancora in beta e potrebbe non funzionare con tutte le app. Alcune app potrebbero crashare o non funzionare correttamente. Consigliamo di utilizzarlo con cautela e solo con app con cui sei disposto a sperimentare.

1. Converti l'app in app condivisa
2. Tieni premuto l'icona dell'app e seleziona "Esegui in Multitask"
3. Trascina la barra in alto per muovere la finestra.
4. Trascina il tasto ridimensiona nell'angolo destro per regolare la dimensione della finestra.

:::note
1. Per usare il multitasking, assicurati di aver selezionato "Keep Extension" durante l'installazione tramite SideStore/AltStore.
2. Se vuoi abilitare JIT per le app in multitasking, dovrai utilizzare un enabler JIT che supporta il collegamento tramite PID.
:::

## Problemi noti

`This container is currently in use livecontainer2`

Potresti riscontrare questo errore quando provi ad abilitare il multitasking in un'app che è gia in esecuzione su un altro LiveContainer o è stata lanciata prima. Non è un bug ma una limitazione di LiveContainer. Per sistemarlo, riavvia l'altro LiveContainer o chiudi l'app nell'altro LiveContainer.

---

`lc.container.unableToMoveContainerFromLiveProcess`

È dovuto da file spazzatura di versioni precedenti di LiveContainer. Ecco come sistemarlo:

1. Installa Filza dentro LiveContainer
2. Trova l'App Container ID nelle impostazioni dell'app
3. Vai in Impostazioni -> Gestione dati
4. Clicca su "Apri in Filza" sotto a "Copia percorso App Group Container"
5. Vai in LiveContainer -> Dati -> Applicazione
6. Cancella la cartella con lo stesso nome del tuo app container ID
