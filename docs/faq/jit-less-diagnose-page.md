---
title: 6. About JIT-Less Diagnose Page
sidebar_position: 9
---

# 6. About JIT-Less Diagnose Page

<img width="300" alt="Image" src="https://github.com/user-attachments/assets/03f6392d-1a2a-4e8b-b03a-e6e7568346d2" />

:::note
This page exists in LiveContainer 3.1.51+
:::

If you successfully setup JIT-Less mode, your JIT-Less Mode Diagnose should look like the screenshot above. The most important indicator is "Certificate Last Up Date". This field should change if you reopens your store. If not, follow the following instructions to diagnose your setup.

## 6.1. App Group ID, App Group Accessible, Store

The "App Group ID" field should end with the exact same 10 characters as the "Bundle Identifier". "App Group Accessible" should be "Yes" and "Store" should correctly show your store.

> For example, if your Bundle Identifier is `com.kdt.livecontainer.A1B2C3D4E5` ,then your app group id should be `group.com.SideStore.SideStore.A1B2C3D4E5` if you use SideStore, or `group.com.rileytestut.AltStore.A1B2C3D4E5` if you use AltStore.

If it only say `group.com.SideStore.SideStore` or `Unknown`, then there's something wrong with your SideStore setup. Please check:

- SideStore is installed through AltServer
- LiveContainer is installed directly through SideStore/AltStore
- Don't try to install LiveContainer through AltStore PAL
- Account used to install SideStore and LiveContainer matches. This can be checked by going to iOS settings -> General -> VPN & Device Management -> (your account name). Check if both LiveContainer and SideStore are under the same account.

:::note
"Entitlement File" exists in 3.2.51+
:::

If you meet the above 4 criteria but App Group is still not accessible, tap "Entitlement File" and check the entitlement extracted form LiveContainer's main executable. A correct entitlement may look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
 <key>application-identifier</key>
 <string>A1B2C3D4E5.com.kdt.livecontainer.A1B2C3D4E5</string>
 <key>com.apple.developer.team-identifier</key>
 <string>A1B2C3D4E5</string>
 <key>com.apple.security.application-groups</key>
 <array>
  <string>group.com.rileytestut.AltStore.A1B2C3D4E5</string>               <--- Important!
  <string>group.com.SideStore.SideStore.A1B2C3D4E5</string>               <--- Important!
 </array>
 <key>get-task-allow</key>
 <true/>
 <key>keychain-access-groups</key>
 <array>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.1</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.2</string>
 </array>
</dict>
</plist>

```

The most important part is `com.apple.security.application-groups`, which determines whether LiveContainer can access SideStore's app group.
This item should exist and its content should look like `group.com.rileytestut.AltStore.A1B2C3D4E5` and `group.com.SideStore.SideStore.A1B2C3D4E5`. If this item is missing or it looks like `group.com.SideStore.SideStore.A1B2C3D4E5.A1B2C3D4E5`, then this is an bug of SideStore, not LiveContainer. The only thing you can do is to remove both LiveContainer and SideStore, and then install them again and check if this issue is solved.

It is reported that if LiveContainer's entitlement is incorrect, you can't activate/deactivate apps in SideStore. **Please do not submit issues about incorrect entitlement as it is not a LiveContainer issue.**

## 6.2.Patch Detected

:::note
Make sure App Group ID, App Group Accessible and Store are correct before proceeding.
:::

It should say "Yes". If not, close your store from the app switcher, reopen it and refresh this diagnose page.
If still not, patch your store again.

## 6.3. Certificate Data / Password Found, Certificate Last Up Date

:::note
Make sure 1 & 2 are correct before proceeding.
:::

If you patched your store correctly, Certificate Data / Password Found should turn to "Yes" if you refresh the diagnose page, and "Certificate Last Up Date" should show the time when you last opens your store.

If Certificate Data / Password Found are "Yes", but "Certificate Last Up Date" is unknown, but apps are working correctly, you might have just updated from version prior to 3.1.51, patch your store again and this field should display correctly.
