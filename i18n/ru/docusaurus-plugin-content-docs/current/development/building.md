---
title: Сборка из исходного кода
sidebar_position: 1
---

# Сборка {#building}

Следуйте этим шагам, чтобы самостоятельно собрать LiveContainer или внести изменения в код.

## 1. Клонирование с подмодулями {#1-clone-with-submodules}

```bash
git clone --recurse-submodules https://github.com/LiveContainer/LiveContainer.git
# or, if you already cloned:
git submodule update --init --recursive
```

Репозиторий использует подмодули `fishhook`, `litehook` и `OpenSSL`. Они должны быть загружены до начала сборки.

## 2. Установка необходимых инструментов {#2-install-prerequisites}

- Xcode 15.4+ с iOS 18 SDK. Более новые SDK также подходят, но учитывайте минимальные поддерживаемые версии ОС.
- Платная или бесплатная учётная запись разработчика Apple для подписи отладочных сборок.
- Python 3, если вы планируете запускать вспомогательные скрипты, например `update_json.py`; необязательно.

## 3. Настройка подписи {#3-configure-signing}

Откройте `xcconfigs/Global.xcconfig` и задайте `DEVELOPMENT_TEAM[config=Debug]` равным вашему Team ID. При необходимости настройте и Release. Если вы используете несколько локальных сборок, убедитесь, что у них разные идентификаторы пакетов.

## 4. Сборка в Xcode {#4-build-from-xcode}

1. Откройте `LiveContainer.xcodeproj`.
2. Выберите схему `LiveContainer`.
3. Выберите целевое устройство: LiveContainer должен запускаться на физическом устройстве.
4. Нажмите **Run**.
