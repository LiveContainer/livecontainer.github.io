---
title: Отдельный LiveContainer
sidebar_position: 1
---

# Отдельный LiveContainer {#standalone-livecontainer}

Установите эту версию, если вам не нужен встроенный SideStore.

## Требования {#requirements}

- iOS/iPadOS 15+
  - Для многозадачности требуется iOS/iPadOS 16.0+
- AltStore 2.2.1+ / SideStore 0.6.0+

## Загрузки {#downloads}
<table>
<tr>
<td>
Стабильная сборка
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/1.0/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Добавить источник AltSource" width="200"/>
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Скачать .ipa" width="200"/>
</a>
</td>
</tr>
<tr>
<td>
Ночная сборка
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Добавить источник AltSource" width="200"/>
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Скачать .ipa" width="200"/>
</a>
</td>
</tr>
</table>

## Установка {#installation}
Установите LiveContainer через SideStore или AltStore. Затем настройте режим без JIT (JIT-Less): в нём LiveContainer подписывает приложения вашим сертификатом из AltStore/SideStore. Инструкции приведены ниже.

### Режим без JIT {#jit-less-mode}
Для запуска гостевых приложений в LiveContainer их необходимо подписать. Для этого нужно получить сертификат и пароль из AltStore/SideStore.

:::note
Режим без JIT не запрещает включать JIT для приложений: он лишь позволяет запускать их без JIT. Если вам нужен JIT, обратитесь к руководству по его настройке.

Если что-то не работает, откройте «JIT-Less Mode Diagnose» для подробной диагностики.
:::

#### Настройка (требуется AltStore 2.2.1+ / SideStore 0.6.2+) {#setup-requires-altstore-221--sidestore-062}
- Откройте настройки LiveContainer.
- Нажмите «Import Certificate from AltStore/SideStore».
- Откроется AltStore/SideStore и предложит экспортировать сертификат. Если запрос не появился, оставьте AltStore/SideStore открытым в фоне и снова нажмите «Import Certificate from AltStore/SideStore».
- Нажмите «Export» в SideStore либо задайте пароль и экспортируйте сертификат в AltStore.
- Откройте «JIT-Less Mode Diagnose» и нажмите «Test JIT-Less Mode».
- Если появилось сообщение «JIT-Less Mode Test Passed», настройка завершена!
:::note
Если вы переустановите AltStore/SideStore через AltServer, повторите эти действия. Иначе может потребоваться переустановка приложения.
:::

### Добавление приложений {#installing-apps}
- Откройте LiveContainer, нажмите плюс в правом верхнем углу и выберите IPA-файлы для добавления.
- Выберите приложение, которое нужно открыть при следующем запуске.
- Для управления приложением нажмите и удерживайте его карточку.
