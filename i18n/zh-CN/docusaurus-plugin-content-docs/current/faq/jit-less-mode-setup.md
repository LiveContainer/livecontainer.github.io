---
title: JIT-Less 模式诊断
sidebar_position: 6
---

# JIT-Less 设置与诊断
<p>
<img width="300" alt="JIT-Less Diagnose Page" src="/img/jit-less-diagnose/1.png" />
<img width="300" alt="JIT-Less Diagnose Page" src="/img/jit-less-diagnose/2.jpg" />
</p>

如果您成功设置了 免JIT模式，您的 **免JIT模式诊断** 视图和 **Entitlement文件** 应该看起来像上面的屏幕截图。当它显示红色值或 `测试免JIT模式` 失败时，使用此指南。

## 应用程序组 ID / 应用程序组可访问 / 存储为红色

原因：

- LiveContainer 未使用 `com.apple.security.application-groups`（也称为应用组）权限进行签名。
- LiveContainer 未通过 AltStore/SideStore 或 Impactor 安装。
- LiveContainer 和 AltStore/SideStore 使用不同的开发者账户进行签名（Team ID 不匹配）。

修复：

1. 确保 LiveContainer 和 AltStore/SideStore 使用相同的开发者账户进行签名。
2. 通过 AltStore/SideStore 重新安装 LiveContainer 并保留必需的扩展/权利（`Use Main Profile` / `Keep All Extensions`）。
3. 在诊断 -> `Entitlement文件`中，验证：`get-task-allow = 是`、`application-groups 正确 = 是`和 `keychain-access-groups 正确 = 是`。

## 检测到证书数据 / 检测到证书密码 / 证书上次更新日期为红色

原因：

- 证书导入未完成。

修复：

1. 在 `设置` 中重新导入证书（文件导入或从 AltStore/SideStore 导入）。
2. 刷新诊断。

## 证书 Team ID 为红色

原因：

- 导入的 `.p12` 证书属于不同的开发者账户。

修复：

1. 删除当前证书。
2. 重新导入与当前 LiveContainer 签名账户匹配的证书。
3. 如果您使用 SideStore/AltStore 来签名 LiveContainer，您需要确保已登录签名 LiveContainer 的账户

## 证书状态 = 吊销/未知 / 证书有效期至 = 未知 / 免测试JIT模式测试失败

原因：

- 证书已被吊销/过期。

修复：

1. 重新导入有效的证书并确保密码正确。
2. 重新打开 SideStore/AltStore 并刷新应用程序，然后返回并刷新诊断。
3. 再次运行 `免测试JIT模式测试`。
4. 如果仍然失败，请尝试重新安装。
5. 当 SideStore 通过 AltServer 安装时，这种情况最常发生。如果此问题无法解决，请考虑[按照新指南重新安装 SideStore](https://docs.sidestore.io/docs/installation/install)。

## Entitlement文件
您也可以通过检查 **Entitlement文件** 来直接检查签名问题。正确的Entitlement文件看起来像这样：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
 <key>application-identifier</key>
 <string>A1B2C3D4E5.com.kdt.livecontainer.A1B2C3D4E5</string>             <--- 重要！
 <key>com.apple.developer.team-identifier</key>
 <string>A1B2C3D4E5</string>
 <key>com.apple.security.application-groups</key>
 <array>
  <string>group.com.rileytestut.AltStore.A1B2C3D4E5</string>              <--- 重要！
  <string>group.com.SideStore.SideStore.A1B2C3D4E5</string>               <--- 重要！
 </array>
 <key>get-task-allow</key>
 <true/>
 <key>keychain-access-groups</key>
 <array>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.1</string>
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.2</string>
  ...
  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.127</string>            <--- 重要！
 </array>
</dict>
</plist>
```

- 其中 `A1B2C3D4E5` 是 `com.apple.developer.team-identifier` 的值（也称为 Team ID）。
- 如果在 `com.apple.security.application-groups` 下存在任何项目，任何应用组相关检查应该通过。
- 如果您没有看到 `get-task-allow`，或者它是 `false`，您使用的是分发证书配置文件来签名 LiveContainer，LiveContainer 将完全不能工作。
- 如果不带 Team ID 前缀的 `application-identifier` 与 LiveContainer 的 bundle ID 不匹配，某些功能（如文件选择器修复）将无法工作。
- 如果没有 128 个 `keychain-access-groups`，`keychain-access-groups 正确` 检查将失败。这在您使用旧版本 iloader 安装 LiveContainer、使用不支持的签名者或忘记在签名者中配置权限时最常见。
