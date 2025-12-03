---
title: Informazioni di Compatibilità
sidebar_position: 2
---

# Informazioni di Compatibilità

Sfortunatamente, non tutte le app funzionano con LiveContainer. Prima di aprire una issue, guarda la lista qui sotto per avere informazioni utili.

## Controlla segnalazioni esistenti

- Controlla l'[etichetta "compatibility"](https://github.com/LiveContainer/LiveContainer/labels/compatibility) per vedere se l'app ha già un ticket aperto.
- Se una versione nightly o beta risolve il problema, scrivilo nei commenti anziché aprire un'altra issue.

## Diagnosi Self-service

1. **Aggiorna LiveContainer** all'ultima build stable o nightly.
2. Decidi se l'app è **private** o **shared** e documenta la scelta. Alcuni bug si presentano solo nei container shared.
3. Guarda se l'app è in modalità **JIT** o **JIT-Less**. Esegui la [Diagnosi JIT-Less](/docs/guides/jit-less-diagnose-page) per assicurarti che i certificati siano validi.
4. Se i tweak sono abilitati, disattivali temporaneamente (premi l'app → Impostazioni → Tweak folder → `None`) per evitare conflitti.
5. Usa **Impostazioni → Gestione Dati → Esporta Log** subito dopo aver riprodotto il problema e allega lo zip del report.
6. Indica se l'app è avviata in **multitask mode** o tramite un'altra istanza di LiveContainer.

## Aprire una nuova issue

Quando apri un ticket in [LiveContainer/issues](https://github.com/LiveContainer/LiveContainer/issues/new/choose), includi:

- Nome dell'app, bundle ID e la versione.
- Versione iOS/iPadOS, modello device e build LiveContainer (stable/nightly + versione).
- Se l'app è private/shared, JIT/JIT-Less, in multitask o ha tweak attivi.
- Step chiari e screenshot/video se è un bug di UI.
- Log o crash report. Per i crash, allega anche il panic log di iOS tramite Xcode o Impostazioni → Privacy & Security → Analytics.

Fornire queste info aumenta di molto le possibilità che i maintainers riescano a riprodurre e sistemare il problema velocemente.
