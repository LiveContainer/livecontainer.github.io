---
title: LiveContainer + SideStore
sidebar_position: 2
---

# LiveContainer + SideStore {#livecontainer--sidestore}
Эта версия LiveContainer включает встроенный SideStore. Она позволяет продлевать срок действия подписи LiveContainer и других приложений, занимая всего один из трёх слотов бесплатной учётной записи.

Установить эту версию можно через [Impactor](https://github.com/khcrysalis/Impactor), [iloader](https://github.com/nab138/iloader) или уже установленный отдельный [SideStore](https://sidestore.io).

:::note
Если вы устанавливаете LiveContainer+SideStore с компьютера под Windows, скачайте [iTunes](https://support.apple.com/en-us/106372): средству установки нужны его драйверы для работы с устройствами Apple.

**Перед началом подключите устройство к компьютеру и подтвердите доверие к нему.**
:::

## Загрузки {#downloads}
Сначала скачайте IPA-файл LiveContainer + SideStore:

| Стабильная сборка | Ночная сборка |
| :-: | :-: |
| <a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer+SideStore.ipa" target="_blank"><img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Скачать .ipa" width="200" /></a> | <a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer+SideStore.ipa" target="_blank"><img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Скачать .ipa" width="200" /></a> |

## Способ 1: Impactor {#method-1-impactor}
[Impactor](https://github.com/khcrysalis/Impactor), ранее известный как Plume Impactor, — современное кроссплатформенное средство установки от [khcrysalis](https://github.com/khcrysali). Impactor автоматически добавляет LiveContainer права (entitlements) для увеличенного лимита памяти и HealthKit.

1. Скачайте подходящую для вашей ОС и архитектуры версию Impactor с [GitHub](https://github.com/khcrysalis/Impactor/releases/latest). Нужен именно «Impactor», а не «plumesign».
2. Установите и откройте Impactor.
3. Убедитесь, что устройство отображается в правом верхнем углу. Если его нет, проверьте примечание выше или попробуйте другой USB-порт либо кабель.
4. Нажмите значок шестерёнки, затем «Add Account» и войдите с Apple ID. При проблемах со входом обратитесь к [списку ошибок](https://docs.sidestore.io/docs/troubleshooting/error-codes) или разработчику Impactor.
5. Нажмите кнопку возврата.
6. Перетащите IPA-файл LiveContainer + SideStore в Impactor.
7. Убедитесь, что выбран пункт «Only Register Main Bundle».
8. Нажмите «Install».
9. В настройках iOS откройте «Основные → VPN и управление устройством» и подтвердите доверие к LiveContainer.
10. Перейдите к разделу [«Настройка после установки»](#setup-after-installing), чтобы завершить настройку LiveContainer и SideStore.

<p class="img-scroll">
<img width="300px" src="/img/lc_sidestore/1.jpg" />
<img width="300px" src="/img/lc_sidestore/2.jpg" />
<img width="300px" src="/img/lc_sidestore/3.jpg" />
</p>

## Способ 2: iloader {#method-2-iloader}
:::note
Используйте последнюю версию iloader: предыдущие версии не умеют корректно подписывать LiveContainer.
:::

[iloader](https://github.com/nab138/iloader) — современное кроссплатформенное средство установки от [nab138](https://github.com/nab138).

Следуйте [руководству по установке SideStore](https://docs.sidestore.io/docs/installation/install). При выборе приложения для установки укажите «LiveContainer+SideStore» вместо «SideStore».

После установки перейдите к разделу [«Настройка после установки»](#setup-after-installing).

## Способ 3: отдельный SideStore {#method-3-standalone-sidestore}
Вы можете перейти с отдельных LiveContainer и SideStore на LiveContainer + SideStore. Это освободит один слот для другого приложения или ещё одного LiveContainer.

Установите IPA-файл LiveContainer + SideStore через отдельный SideStore. Установка выполняется как обновление, поэтому все данные сохранятся. Обязательно выберите «Keep All Extensions (Use Main Profile)». После настройки встроенного SideStore отдельный SideStore можно удалить.

После установки перейдите к разделу [«Настройка после установки»](#setup-after-installing).

## Настройка после установки {#setup-after-installing}
После установки LiveContainer+SideStore импортируйте сертификат из SideStore, чтобы LiveContainer тоже мог подписывать приложения.

1. Откройте SideStore кнопкой в левом верхнем углу вкладки «Apps».
2. Перейдите в настройки SideStore и войдите в учётную запись. Если SideStore был установлен раньше, он может показывать, что вход уже выполнен. Однако встроенный SideStore не может получить ваши учётные данные: выйдите из аккаунта и войдите снова.
3. Подключитесь к LocalDevVPN, откройте «My apps» и нажмите «Refresh All».
4. Закройте SideStore и откройте LiveContainer. Для этого нажмите значок выхода на странице приложений SideStore или воспользуйтесь переключателем приложений.
5. В настройках LiveContainer нажмите «Import Certificate from SideStore», затем «OK».
6. Если кнопка «Import Certificate» сменилась на «Remove Certificate», сертификат импортирован. Проверьте настройку на странице «JIT-Less Mode Diagnose».
7. При желании [проверьте успешность продления подписи](../guides/refresh-verification.md).

<p class="img-scroll">
<img height="500px" src="/img/lc_sidestore/4.jpg" />
<img height="500px" src="/img/lc_sidestore/5.jpg" />
<img height="500px" src="/img/lc_sidestore/6.jpg" />
<img height="500px" src="/img/lc_sidestore/7.jpg" />
</p>

## Команда для автоматического продления подписи {#auto-refresh-shortcut}
Команда автоматического продления работает так же, как с отдельным SideStore: замените действие SideStore «Refresh All Apps» на одноимённое действие LiveContainer.

## Решение проблем {#troubleshooting}
Если появляется ошибка «Certificate not found, did you log into built-in SideStore?», хотя вы правильно выполнили описанные выше действия, вероятно, причина в пока не выясненной проблеме SideStore. Попробуйте следующий обходной способ.

1. Откройте встроенный SideStore, перейдите в настройки и прокрутите вниз.
2. Нажмите «Export Signing Certificate...».
3. Задайте пароль для экспортируемого сертификата и сохраните его на устройстве.
4. Закройте встроенный SideStore и снова откройте LiveContainer.
5. В настройках нажмите «Import Certificate», затем «OK».
6. Выберите экспортированный сертификат и введите заданный пароль.
7. Проверьте настройку на странице «JIT-Less Mode Diagnose».

<p class="img-scroll">
<img height="500px" src="/img/lc_sidestore/8.jpg" />
<img height="500px" src="/img/lc_sidestore/10.jpg" />
<img height="500px" src="/img/lc_sidestore/9.jpg" />
</p>
