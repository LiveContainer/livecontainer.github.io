---
title: Поддержка JIT
sidebar_position: 2
---

# Поддержка JIT {#jit-support}

LiveContainer поддерживает популярные средства включения JIT. Настройте нужное средство в разделе JIT настроек LiveContainer.

## Выбор средства включения JIT {#select-a-jit-enabler}
:::note
На iOS 26+ работают только StikDebug и StikDebug(Another LiveContainer).
:::

Для *StikDebug* выберите «StikDebug».

Для *StikDebug внутри LiveContainer* выберите «StikDebug(Another LiveContainer)».

Для *SideStore* выберите SideStore. Поскольку схема URL для включения JIT в SideStore пока не реализована, JIT для текущего LiveContainer нужно включать вручную через SideStore. Встроенный SideStore не поддерживается.

Для *JitStreamer-EB* (устарел) выберите JitStreamer-EB. Если вы используете JitStreamer через WireGuard VPN и подключаетесь к официальному серверу либо собственному серверу без изменения переменной `WIREGUARD_SERVER_ADDRESS`, поле «Address» можно оставить пустым. Иначе укажите адрес сервера вместе со схемой http/https и портом 9172.

Для *SideJITServer/JITStreamer 2.0* укажите адрес сервера и UDID устройства.

## Настройка приложения {#setup-app}
Чтобы приложение ожидало включения JIT, удерживайте его карточку → настройки → включите «Launch with JIT». LiveContainer будет ждать включения JIT и попробует связаться с выбранным средством.

На iOS 26+ для устройств с A15 или новее либо M2 или новее также нужен отдельный JIT-скрипт для каждого приложения. Обратитесь за ним к разработчику приложения. Чтобы загрузить скрипт, удерживайте карточку приложения → настройки → «JIT launch Script».

## Настройка StikDebug (Another LiveContainer) {#setup-stikdebug-another-livecontainer}
StikDebug можно установить и использовать внутри LiveContainer. Для его запуска нужен ещё один свободный экземпляр LiveContainer.

- Скачайте IPA StikDebug и добавьте его в LiveContainer.
- Настройте StikDebug обычным способом: импортируйте файл сопряжения и выполните остальные действия.
- Переведите StikDebug в общее приложение.
- Убедитесь, что доступен свободный экземпляр LiveContainer, отличный от текущего.
- Подключитесь к LocalDevVPN.
- Нажмите «Run».
- StikDebug откроется в другом экземпляре LiveContainer, а нужное приложение должно запуститься с включённым JIT.

## Правильный порядок включения JIT для приложения внутри LiveContainer {#the-correct-way-to-enable-jit-for-an-app-inside-livecontainer}
0. Пока не включайте JIT для LiveContainer.
1. Настройте средство включения JIT, как описано выше.
2. Включите «Launch with JIT», как описано выше.
3. Нажмите кнопку запуска.
4. Если выбранное средство не поддерживает автоматическое включение, включите через него JIT для LiveContainer, оставив окно ожидания JIT открытым.
