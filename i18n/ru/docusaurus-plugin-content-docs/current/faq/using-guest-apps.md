---
title: Использование гостевых приложений
sidebar_position: 8
---

# Использование гостевых приложений {#using-guest-apps}

## Почему приложение не появляется во втором LiveContainer? {#why-does-my-app-not-appear-in-the-second-livecontainer}

В нескольких экземплярах LiveContainer видны только общие приложения.

- Удерживайте карточку приложения → `Settings` → `Convert to Shared App`.

## Не удаётся выбрать файл, не работает диалог выбора файлов или приложение требует включить уведомления {#cant-select-file--file-picker-not-working--app-cant-proceed-without-enabling-notification}

Включите исправления для этого приложения:

- удерживайте карточку приложения → `Settings` → включите `Fix File Picker`;
- удерживайте карточку приложения → `Settings` → включите `Fix Local Notifications`.

## При входе через Safari появляется ошибка «address is invalid» {#safari-sign-in-returns-address-is-invalid}

Известная проблема и обходные способы: [обращение №242](https://github.com/LiveContainer/LiveContainer/issues/242).

## Приложение отображается в неверном разрешении {#app-renders-at-wrong-resolution}
Чаще всего это происходит со старыми играми или играми с горизонтальной ориентацией.

Попробуйте включить блокировку ориентации:
- удерживайте карточку приложения → `Settings` → выберите ориентацию `landscape`.

Если приложение старое и блокировка ориентации не помогает, см. [обращение №457](https://github.com/LiveContainer/LiveContainer/issues/457).
