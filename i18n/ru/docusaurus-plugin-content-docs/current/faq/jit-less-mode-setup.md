---
title: Диагностика режима без JIT
sidebar_position: 6
---

# Настройка и диагностика режима без JIT {#jit-less-setup--diagnose}
<p>
<img width="300" alt="Страница диагностики режима без JIT" src="/img/jit-less-diagnose/1.png" />
<img width="300" alt="Страница диагностики режима без JIT" src="/img/jit-less-diagnose/2.jpg" />
</p>

После успешной настройки страница **JIT-Less Mode Diagnose** и **файл entitlements** должны выглядеть как на скриншотах выше. Используйте это руководство, если значения выделены красным или проверка `Test JIT-Less Mode` завершается ошибкой.

## App Group ID / App Group Accessible / Store выделены красным {#app-group-id--app-group-accessible--store-is-red}

Причины:

- LiveContainer подписан без права `com.apple.security.application-groups` (App Groups).
- LiveContainer установлен не через AltStore/SideStore или Impactor.
- LiveContainer и магазин подписаны разными учётными записями Apple: Team ID не совпадают.

Решение:

1. Убедитесь, что LiveContainer и AltStore/SideStore подписаны одной учётной записью Apple.
2. Переустановите LiveContainer через AltStore/SideStore, сохранив необходимые расширения и entitlements: `Use Main Profile` / `Keep All Extensions`.
3. В разделе диагностики → `Entitlement File` проверьте значения: `get-task-allow = Yes`, `application-groups Correct = Yes` и `keychain-access-groups Correct = Yes`.

## Certificate Data Found / Certificate Password Found / Certificate Last Update Date выделены красным {#certificate-data-found---certificate-password-found--certificate-last-update-date-is-red}

Причина:

- Импорт сертификата не завершён.

Решение:

1. Повторно импортируйте сертификат в `Settings`: из файла или из магазина.
2. Обновите страницу диагностики.

## Certificate Team ID выделен красным {#certificate-team-id-is-red}

Причина:

- Импортированный сертификат `.p12` принадлежит другой команде Apple Developer.

Решение:

1. Удалите текущий сертификат.
2. Импортируйте сертификат учётной записи, которой подписан текущий LiveContainer.
3. Если вы подписываете LiveContainer через SideStore/AltStore, убедитесь, что вошли именно в учётную запись, использованную для его подписи.

## Certificate Status = Revoked/Unknown / Certificate Validate Until = Unknown / проверка Test JIT-Less Mode не проходит {#certificate-status--revokedunknown--certificate-validate-until--unknown--test-jit-less-mode-fails}

Причина:

- Сертификат отозван или срок его действия истёк.

Решение:

1. Импортируйте действующий сертификат и проверьте пароль.
2. Откройте магазин и продлите подписи приложений, затем вернитесь и обновите диагностику.
3. Снова запустите `Test JIT-Less Mode`.
4. Если проверка не проходит, попробуйте переустановку.
5. Это чаще случается, когда SideStore установлен через AltServer. Если проблему не удаётся исправить, [переустановите SideStore по новому руководству](https://docs.sidestore.io/docs/installation/install).

## Файл entitlements {#entitlements-file}
Ошибки подписи можно выявить и напрямую, проверив **файл entitlements**. Корректный файл может выглядеть так:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
 <key>application-identifier</key>
 <string>A1B2C3D4E5.com.kdt.livecontainer.A1B2C3D4E5</string>             <--- Important!
 <key>com.apple.developer.team-identifier</key>
 <string>A1B2C3D4E5</string>
 <key>com.apple.security.application-groups</key>
 <array>
  <string>group.com.rileytestut.AltStore.A1B2C3D4E5</string>              <--- Important!
  <string>group.com.SideStore.SideStore.A1B2C3D4E5</string>               <--- Important!
 </array>
 <key>get-task-allow</key>
 <true/>
 <key>keychain-access-groups</key>
 <array>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.1</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.2</string>
  ...
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.127</string>            <--- Important!
 </array>
</dict>
</plist>
```

- `A1B2C3D4E5` — значение `com.apple.developer.team-identifier`, то есть Team ID.
- Если в `com.apple.security.application-groups` есть хотя бы один элемент, проверки App Group должны проходить.
- Если `get-task-allow` отсутствует или имеет значение `false`, LiveContainer подписан профилем распространения. Такой способ не поддерживается, и LiveContainer вообще не будет работать.
- Если `application-identifier` без префикса Team ID не совпадает с Bundle ID LiveContainer, некоторые функции, например исправление выбора файлов, работать не будут.
- Если в `keychain-access-groups` нет 128 групп, проверка `keychain-access-groups Correct` завершится ошибкой. Это часто происходит при установке старой версией iloader, использовании неподдерживаемого средства подписи или отсутствии нужной настройки entitlements в нём.
