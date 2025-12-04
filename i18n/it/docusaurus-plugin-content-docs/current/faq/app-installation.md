---
title: 3. Correlati alla Firma / Installazione delle App
sidebar_position: 6
---

# 3. Correlati alla Firma / Installazione delle App

## 3.1. Un messaggio di errore che include "Signature Invalid"

**Prima di aprire issue fai un test nelle impostazioni LiveContainer -> Test JIT-Less Mode**

È probabilmente causata dal certificato utilizzato per firmare l'app che è revocato prima della scadenze.
Soluzione: Tieni premuto l'app -> Impostazioni -> scorri in basso -> force re-sign

Pare che alcune versioni di CydiaSubstrate non possano essere firmate da AltSign. Quindi se il messaggio di errore contiene "CydiaSubstrate", prova a passare a ZSign. Guarda il punto 3.2 qui sotto.

## 3.2. /Users/runner/Library/Developer/Xcode/DerivedData/AltStore-dunvejkuqerofjghtqolpzgexuyv/SourcePackages/checkouts/AltSign/Sources/ldid/../ldid-core/ldid.cpp(1368): _assert(): end >= size - 0x10 (o qualcosa del genere)

Questo si vede spesso nelle app Flutter(Dart) ed è causato dal check di AltSign sui binari dell'app.
Soluzione: Cambia il signer a ZSign.

1. Impostazioni LiveContainer -> Default Signer -> Seleziona ZSign
2. Tieni premuto l'app -> Impostazioni -> Signer -> Seleziona ZSign

## 3.3. The bundle “OpenSSL” couldn’t be loaded

Prima di tutto, verifica se SideStore/AltStore è scaduto o meno.
Se SideStore/AltStore non è scaduto, passa a ZSign. Vedi gli step nel punto 3.2.

Questo problema è causato dal fatto che SideStore è firmato da un altro certificato o è scaduto.

## 3.4. LiveContainer crasha quando installo un'app

L'app che stai installando potrebbe non essere compatibile con AltSign, passa a ZSign e riprova. Vedi gli step nel punto 3.2.
