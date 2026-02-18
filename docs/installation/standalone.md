---
title: Standalone LiveContainer
sidebar_position: 1
---

# Standalone LiveContainer

Install this version if you don't need the built-in SideStore.

## Requirements

- iOS/iPadOS 15+
   + Multitasking requires iOS/iPadOS 16.0+
- AltStore 2.2.1+ / SideStore 0.6.0+

## Downloads
<table>
<tr>
<td>
Stable
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/1.0/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200"/>
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200"/>
</a>
</td>
</tr>
<tr>
<td>
Nightly
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200"/>
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200"/>
</a>
</td>
</tr>
</table>

## Installation
Please use SideStore/AltStore to install LiveContainer. After installation, please setup JIT-Less mode, in which LiveContainer signs your apps with your certificate from AltStore/SideStore (see the instructions below).

### JIT-Less mode
To launch apps in LiveContainer, guest apps need to be codesigned, which requires retrieving the certificate and password from AltStore/SideStore.

:::note
JIT-Less mode does not mean you can't enable JIT for your apps. Instead, it means JIT is not required to launch an app. If you want to use JIT, see JIT setup guide.
 
If something goes wrong, please check "JIT-Less Mode Diagnose" for more information.
:::

#### Setup (Requires AltStore 2.2.1+ / SideStore 0.6.2+)
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
