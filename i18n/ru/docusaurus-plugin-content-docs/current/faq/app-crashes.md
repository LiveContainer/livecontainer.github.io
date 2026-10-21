---
title: Сбои приложений
sidebar_position: 7
---

# Сбои приложений {#app-crashes}

## LiveContainer не открывается на iOS 18.2+ {#livecontainer-wont-open-on-ios-182}

Используйте LiveContainer 3.0.0 или новее. Если после обновления проблема сохраняется, перезагрузите устройство и повторите попытку.

## LiveContainer вылетает на iOS 26.4+ {#livecontainer-crash-on-ios-264}
Используйте LiveContainer 3.6.65 или новее.

## `could not register fairplay decryption, mremap_encrypted() => -1` {#could-not-register-fairplay-decryption-mremap_encrypted---1}

Скорее всего, IPA не расшифрован. Используйте корректно расшифрованный IPA-файл.

## `App returned from its main function with code 0` {#app-returned-from-its-main-function-with-code-0}

IPA имеет неверный формат. Найдите другой файл. При попытке установить такой IPA через SideStore/AltStore появится ошибка «This app is in an invalid format.».

## Приложение всё равно вылетает {#app-still-crashes}

1. Поищите решение среди существующих обращений в репозитории.
2. Установите приложение напрямую через SideStore/AltStore и проверьте его работу. Если оно не работает и при обычной сторонней установке, найдите другой рабочий IPA.

Если решения нет, создайте обращение о совместимости.

У большинства приложений закрытый исходный код, поэтому установить причину сбоя очень сложно. Сроки исправления заранее неизвестны.
