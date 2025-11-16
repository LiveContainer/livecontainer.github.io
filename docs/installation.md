---
title: Installation
sidebar_position: 1
---

# Installation

:::warning
**Important Notice Regarding Third-Party Builds of LiveContainer**

We have recently noticed the appearance of certain closed-source third-party builds of LiveContainer. Please be aware that all your apps are installed within LiveContainer, which means these third-party builds **have full access to your data, including sensitive information such as keychain items and login credentials**. 

For instance, if you log into YouTube within such a LiveContainer, the third-party build will have complete access to your YouTube (Google) account credentials. Please avoid using these closed-source builds unless you have absolute trust in their developers or are able to personally review the source code and build yourself. 
 
Furthermore, please note that we do not provide any support for issues of these third-party builds.
:::

:::note
It’s recommended to follow the following steps to set up JIT-Less mode for using LiveContainer without JIT. If you encounter any issues, please review [#265](https://github.com/LiveContainer/LiveContainer/issues/265) first before reporting them.
:::

## Requirements

- iOS/iPadOS 15+
   + Multitasking requires iOS/iPadOS 16.0+
- AltStore 2.0+ / SideStore 0.6.0+

## Downloads
### Stable:
<a href="https://celloserenity.github.io/altdirect/?url=https://raw.githubusercontent.com/LiveContainer/LiveContainer/refs/heads/main/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/AltSource_Blue.png?raw=true" alt="Add AltSource" width="200" />
</a>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Download .ipa" width="200" />
</a>

### Nightly:
<a href="https://celloserenity.github.io/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/AltSource_Blue.png?raw=true" alt="Add AltSource" width="200" />
</a>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="Download .ipa" width="200" />
</a>

## Installation
- It is recommended to setup JIT-Less mode, in which LiveContainer signs your apps with your certificate from AltStore/SideStore (see the instructions below).

### JIT-Less mode (Without JIT \[recommended])
These steps can be bypassed if you don't mind enabling JIT for your app every time, but it is not recommended. Without JIT, guest apps need to be codesigned, which requires retrieving the certificate and password from AltStore/SideStore.

:::note
JIT-Less mode does not mean you can't enable JIT for your apps. Instead, it means JIT is not required to launch an app. If you want to use JIT, see the instructions below in "JIT Support" section. 
If something goes wrong, please check "JIT-Less Mode Diagnose" for more information.
:::

#### Setup (Requires AltStore 2.2.1+ / SideStore 0.6.2+ \[recommended])
- Open Settings in LiveContainer 
- Tap "Import Certificate from AltStore/SideStore"
- AltStore/SideStore will be opened and ask if you want to export the certificate. If you don't see the prompt, keep AltStore/SideStore open in the background and tap "Import Certificate from AltStore/SideStore" again.
- Press "Export" in SideStore or set a password and export in AltStore
- Tap "JIT-Less Mode Diagnose" and tap "Test JIT-Less Mode"
- If it says "JIT-Less Mode Test Passed", you are good to go!
:::note
If you reinstall AltStore/SideStore using AltServer, you will need to go through these steps again or risk needing to reinstall the app.
:::

### Installing Apps
- Open LiveContainer, tap the plus icon in the upper right hand corner and select IPA files to install.
- Choose the app you want to open in the next launch.
- You can long-press the app to manage it.

### Next steps

Once the basics work, explore the following guides:

- [Multiple LiveContainers](./guides/multiple-livecontainers.md) — run additional containers and share apps between them.
- [JIT Support](./guides/jit-support.md) — configure automatic JIT enablers or scripts.
- [JIT-Less Diagnose Page](./guides/jit-less-diagnose-page.md) — verify imported certificates and troubleshoot signing issues.
- [Tweaks](./guides/tweaks.md) — inject CydiaSubstrate tweaks globally or per app.
- [Multitask](./guides/multitask.md) — float guest apps in resizable windows.
- [Lock & Hide Apps](./guides/lock-app.md) — protect sensitive guests with Face ID or Strict Hiding mode.
