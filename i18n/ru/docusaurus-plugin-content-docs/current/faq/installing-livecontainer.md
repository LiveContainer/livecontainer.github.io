---
title: Проблемы установки и подписи
sidebar_position: 5
---

# Ошибки установки и подписи {#installation--signing-errors}

Здесь рассматриваются ошибки установки самого LiveContainer, а также подписи и импорта гостевых IPA.

## «The executable was signed with invalid entitlements» {#the-executable-was-signed-with-invalid-entitlements}
Для установки LiveContainer 3.2.58 требуется SideStore 0.6.2+ или AltStore 2.2.1+. Обновите средство установки.

## Приложение подписано последним сертификатом, но подпись недействительна, или появляется множество ошибок с «Invalid Signature» {#the-app-is-signed-with-latest-certificate-but-its-code-signature-is-invalid-or-a-wall-of-error-including-invalid-signature}

1. Проверьте настройку режима без JIT. Подробнее см. в разделе [«Диагностика режима без JIT»](./jit-less-mode-setup.md).
2. Если диагностика проходит успешно, принудительно переподпишите приложение в его настройках.

## LiveContainer вылетает при импорте IPA {#livecontainer-crashes-while-importing-ipa}

Частые причины:

- неверная структура IPA-файла;
- несовместимость средства подписи.
