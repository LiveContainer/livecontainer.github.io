---
title: JIT-Less 诊断页面
sidebar_position: 9
---

# 关于 JIT-Less 诊断页面

<img width="300" alt="JIT-Less Diagnose Page" src="/img/jit-less-diagnose/1.png" />

:::note
该页面在 LiveContainer 3.1.51+ 中提供。
:::

若你已正确配置 JIT-Less 模式，诊断页面应与上图类似，其中「Certificate Last Up Date」最关键。只要重新打开 AltStore/SideStore，该字段的时间就应更新；如果没有，请按照下文继续排查。

## App Group ID、App Group Accessible、Store

“App Group ID” 的结尾 10 位应与 “Bundle Identifier” 完全一致；“App Group Accessible” 需显示 “Yes”，“Store” 应正确显示你的商店。

> 例如 Bundle Identifier 是 `com.kdt.livecontainer.A1B2C3D4E5`：  
> - 使用 SideStore 时，App Group ID 应为 `group.com.SideStore.SideStore.A1B2C3D4E5`  
> - 使用 AltStore 时，应为 `group.com.rileytestut.AltStore.A1B2C3D4E5`

若字段只显示 `group.com.SideStore.SideStore` 或 `Unknown`，说明 SideStore 配置有误，请检查：

- SideStore 是否通过 AltServer 安装
- LiveContainer 是否直接使用 SideStore/AltStore 安装
- 不要尝试通过 AltStore PAL 安装 LiveContainer
- 安装 SideStore 与 LiveContainer 使用的是同一账号（前往 iOS 设置 → 通用 → VPN 与设备管理 → (账号名称)，确认二者在同一账号下）

:::note
「Entitlement File」在 3.2.51+ 可用。
:::

如果满足上述条件但 App Group 仍无法访问，点击 “Entitlement File” 查看 LiveContainer 主可执行文件的权限是否正确。正确示例：

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
  <string>group.com.rileytestut.AltStore.A1B2C3D4E5</string>
  <string>group.com.SideStore.SideStore.A1B2C3D4E5</string>
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

关键在 `com.apple.security.application-groups`，它决定 LiveContainer 是否能访问 SideStore 的 App Group。该项必须存在，且内容应类似 `group.com.rileytestut.AltStore.A1B2C3D4E5` 与 `group.com.SideStore.SideStore.A1B2C3D4E5`。若缺失或出现 `group.com.SideStore.SideStore.A1B2C3D4E5.A1B2C3D4E5`，说明是 SideStore 的 Bug，只能卸载 LiveContainer/SideStore 后重新安装并检查。

据反馈，如果 LiveContainer 的 entitlement 不正确，在 SideStore 中将无法激活/停用应用。**请勿就此提交 Issue，因为它不是 LiveContainer 的问题。**

## Patch Detected

:::note
在继续之前，请先确保 App Group ID、App Group Accessible、Store 三项正确。
:::

该项应显示 “Yes”。若不是，请在应用切换器中关闭商店应用，重新打开并刷新此页面；如仍不行，请重新为商店打补丁。

## Certificate Data / Password Found、Certificate Last Up Date

:::note
在检查这一步之前，请先确认前两节都已通过。
:::

如果补丁正确，“Certificate Data / Password Found” 在刷新后应变为 “Yes”，“Certificate Last Up Date” 应显示你上次打开商店的时间。

若前者为 “Yes”，但 “Certificate Last Up Date” 仍为 Unknown，而应用运行正常，可能是刚从 3.1.51 之前的版本升级，请重新打补丁后再查看。
