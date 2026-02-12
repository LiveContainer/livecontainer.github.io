---
title: LiveContainer + SideStore
sidebar_position: 2
---

# LiveContainer + SideStore
This version of LiveContainer comes with a built-in SideStore, which allows you to refresh LiveContainer and other apps using only one of your 3 free app slots.

You can install this version through [Impactor](https://github.com/khcrysalis/Impactor) (recommended), [iloader](https://github.com/nab138/iloader), or an existing standalone [SideStore](https://sidestore.io).

:::note
If you're installing LiveContainer+SideStore on a Windows PC, you need to download [iTunes](https://support.apple.com/en-us/106372) so your sideloader can use the drivers for interacting with Apple devices.

**Connect your device to your computer and trust it before you start**
:::

## Downloads
Please download the LiveContainer + SideStore .ipa file first:
|Stable|Nightly|
|:-:|:-:|
|<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer+SideStore.ipa" target="_blank"><img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Download .ipa" width="200" /></a>|<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer+SideStore.ipa" target="_blank"><img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Download .ipa" width="200" /></a>|

## Method 1: Impactor
[Impactor](https://github.com/khcrysalis/Impactor) (previously known as Plume Impactor) is a cross-platform, modern sideloader developed by [khcrysalis](https://github.com/khcrysali). Impactor is recommended here because it can correctly handle all the entitlements LiveContainer needs.

1. Download the correct version of Impactor from [GitHub](https://github.com/khcrysalis/Impactor/releases/latest) based on your OS and architecture. Note that we're downloading "Impactor", not "plumesign".
2. Install and open Impactor.
3. Make sure your device appears in the top right corner. If not, check the note above or use another USB port/cable.
4. Click the settings (gear) icon, then click "Add Account" to sign in with your Apple ID. For any sign-in issues, please refer to [here](https://docs.sidestore.io/docs/troubleshooting/error-codes) or contact Impactor's developer.
5. Tap the back button.
6. Drag and drop the LiveContainer + SideStore .ipa file into Impactor.
7. Make sure "Only Register Main Bundle" is selected.
8. Click "Install"
9. Go to iOS Settings App -> General -> VPN & Device Management and verify LiveContainer
10. Go to the [Setup after Installing](#setup-after-installing) section to complete LiveContainer and SideStore's setup.

<p>
<img width="300px" src="/img/lc_sidestore/1.jpg" />
<img width="300px" src="/img/lc_sidestore/2.jpg" />
<img width="300px" src="/img/lc_sidestore/3.jpg" />
</p>

## Method 2: iloader
:::note
At the time of writing, iloader cannot correctly handle LiveContainer's entitlements (keychain access groups), so the keychain separation / multiple container feature will not work correctly.
:::

[iloader](https://github.com/nab138/iloader) is a cross-platform, modern Sideloader developed by [nab138](https://github.com/nab138).

You can follow [SideStore's installation guide](https://docs.sidestore.io/docs/installation/install) to install LiveContainer+SideStore. Just click "LiveContainer+SideStore" instead of "SideStore" when selecting the app to sideload.

After installing, go to the [Setup after Installing](#setup-after-installing) section to complete LiveContainer and SideStore's setup.

Alternatively, you can reinstall the LiveContainer+SideStore .ipa file in the built-in SideStore to correct the entitlement issue.

## Method 3: Standalone SideStore
You can also migrate from a standalone LiveContainer and SideStore setup to the LiveContainer + SideStore setup, which saves you one free slot for other apps or another LiveContainer.

You can simply install the LiveContainer + SideStore .ipa file in the standalone SideStore. This works like an upgrade, so all your data will be preserved. When installing, be sure to select "Keep All Extensions (Use Main Profile)". After setting up the built-in SideStore, you can remove the standalone SideStore.

After installing, go to the [Setup after Installing](#setup-after-installing) section to complete LiveContainer and SideStore's setup.

## Setup after Installing
Once LiveContainer+SideStore is installed, you need to import the certificate from SideStore so LiveContainer can also sign apps.

1. Open SideStore using the SideStore button in the top left corner of the "Apps" page.
2. Go to SideStore's settings and log in. If you previously had SideStore installed, you might find yourself already logged in, but since the built-in SideStore cannot retrieve your credentials, please log out and sign in again.
3. Connect to LocalDevVPN, go to "My apps" page and tap "Refresh All"
4. Quit SideStore and open LiveContainer. You can do this by either tapping the "quit" icon in SideStore's Apps page or using the app switcher.
5. Go to LiveContainer's settings, tap "Import Certificate from SideStore", and tap "OK".
6. If the "Import Certificate" button changes to "Remove Certificate", the certificate has been imported. You can check the "JIT-Less Mode Diagnose" page to verify that everything is configured correctly.

<p>
<img height="500px" src="/img/lc_sidestore/4.jpg" />
<img height="500px" src="/img/lc_sidestore/5.jpg" />
<img height="500px" src="/img/lc_sidestore/6.jpg" />
<img height="500px" src="/img/lc_sidestore/7.jpg" />
</p>

## Auto-Refresh Shortcut
You can use the auto-refresh shortcut just like you would with the standalone SideStore—simply replace SideStore's "Refresh All Apps" action with LiveContainer's.

## Next steps

- [Installation Overview](/docs/installation) — compare installation paths and migration choices.
- [Sources](/docs/guides/sources) — add source feeds and install apps directly from source lists.
- [JIT Support](/docs/guides/jit-support) — configure JIT enablers after setup.
- [JIT-Less Diagnose Page](/docs/guides/jit-less-diagnose-page) — validate certificate import and signing status.
