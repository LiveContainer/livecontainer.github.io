---
title: Compilare da Sorgente
sidebar_position: 1
---

# Compilare

Segui questi step se vuoi compilare autonomamente LiveContainer o contribuire al codice.

## 1. Clona con i submodule

```bash
git clone --recurse-submodules https://github.com/LiveContainer/LiveContainer.git
# o, se hai già clonato:
git submodule update --init --recursive
```

La repo dipende da diversi submodule (`fishhook`, `litehook`, `OpenSSL`) che devono essere presenti prima di compilare.

## 2. Installa prerequisiti

- Xcode 15.4+ con iOS 18 SDK (gli SDK più recenti funzionano comunque, ma tieni a mente gli obbiettivi di implementazione).
- Un account Apple developer a pagamento o gratuito per poter firmare le build di debug.
- (Facoltativo) Python 3 se vuoi eseguire gli helper script come `update_json.py`.

## 3. Configura la firma

Apri `xcconfigs/Global.xcconfig`, imposta `DEVELOPMENT_TEAM[config=Debug]` (e Release se necessario) al tuo Team ID e assicurati che i tuoi bundle id siano unici se esegui più build locali. 

## 4. Compila da Xcode

1. Apri `LiveContainer.xcodeproj`.
2. Seleziona lo scheme `LiveContainer`.
3. Scegli il tuo target device (LiveContainer deve avviarsi sul device).
4. Premi **Esegui**.

LiveProcess, le estensioni MultitaskSupport e il tweak helper targets sono compilati automaticamente come dipendenze quando viene compilato il main target.

## 5. Componenti facoltative

- **TestJITLess**: contiene utility per validare i workflow di firma JIT-Less
- **TweakLoader**: se modifichi il tweak loading, compila/archivia questo target e cambia il dylib associato.
- **SideStore helpers**: assicurati che `SideStore` target firmi correttamente se stai testando le JIT automation.

Dopo che l'app si installa sul dispositivo, segui la [guida di Installazione](../installation.md) per importare i certificati e attivare feature come la modalità JIT-Less.
