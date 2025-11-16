---
title: 安装
---

# 安装

:::warning
**关于第三方 LiveContainer 版本的重要提醒**

近期出现了若干闭源的第三方 LiveContainer 构建。请注意：所有应用都会被安装在 LiveContainer 内，这些第三方构建因此可以完全访问你的数据（包括钥匙串和账号密码）。  

例如，在这些构建中登录 YouTube 时，开发者就能获取你的 Google 账号凭据。除非你完全信任这些开发者，或者能自行审核源码与构建流程，否则请勿使用这些闭源版本。我们也不会为它们提供任何支持。
:::

:::note
如果你打算在「无 JIT」环境下使用 LiveContainer，建议按照下文配置 JIT-Less 模式。若遇到相关问题，请先查阅 [#265](https://github.com/LiveContainer/LiveContainer/issues/265)。
:::

## 系统要求

- iOS/iPadOS 15+
  - 多任务需要 iOS/iPadOS 16.0+
- AltStore 2.0+ 或 SideStore 0.6.0+

## 下载

### 稳定版
<a href="https://celloserenity.github.io/altdirect/?url=https://raw.githubusercontent.com/LiveContainer/LiveContainer/refs/heads/main/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/AltSource_Blue.png?raw=true" alt="添加 AltSource" width="200" />
</a>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="下载 .ipa" width="200" />
</a>

### Nightly
<a href="https://celloserenity.github.io/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/AltSource_Blue.png?raw=true" alt="添加 AltSource" width="200" />
</a>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="下载 .ipa" width="200" />
</a>

## 安装

- 建议先完成 JIT-Less 模式配置，LiveContainer 会使用从 AltStore/SideStore 导入的证书为应用签名。

### JIT-Less 模式（推荐）

如果你不介意每次都手动开启 JIT，可以跳过这些步骤，但我们仍然建议完成配置。不开启 JIT 时，需要从 AltStore/SideStore 取回证书与密码以便重签。

:::note
JIT-Less 并不代表无法启用 JIT，只是「启动应用不再强制需要 JIT」。如需 JIT，请参见下方「JIT 支持」指南。如果流程失败，可先查看「JIT-Less 诊断页面」。
:::

#### 设置（需要 AltStore 2.2.1+ / SideStore 0.6.2+）

- 打开 LiveContainer → 设置
- 点击「从 AltStore/SideStore 导入证书」
- AltStore/SideStore 会弹窗询问是否导出证书。若没有弹窗，请保持 AltStore/SideStore 在后台，再次点击导入按钮。
- 在 SideStore 中点击「Export」，或在 AltStore 中设置密码后导出
- 打开「JIT-Less 模式诊断」并点击「测试 JIT-Less 模式」
- 看到「JIT-Less Mode Test Passed」就代表配置完成

:::note
如果你使用 AltServer 重新安装了 AltStore/SideStore，需要重新执行上述步骤，否则可能需要重装 LiveContainer。
:::

### 安装应用

- 打开 LiveContainer，点击右上角的加号并选择需要安装的 IPA
- 选择下次要启动的应用
- 长按应用可以打开管理面板，进行更多操作

### 下一步

完成基础安装后，可以继续探索以下功能：

- [多实例 LiveContainer](/docs/guides/multiple-livecontainers)：安装额外的容器并在它们之间共享应用
- [JIT 支持](/docs/guides/jit-support)：配置自动化 JIT 启用器或脚本
- [JIT-Less 诊断页面](/docs/guides/jit-less-diagnose-page)：验证导入的证书并排查签名问题
- [插件/Tweak 管理](/docs/guides/tweaks)：全局或按应用注入 CydiaSubstrate 插件
- [多任务](/docs/guides/multitask)：让应用以浮窗或窗口方式运行
- [锁定与隐藏应用](/docs/guides/lock-app)：使用 Face ID 或严格隐藏模式保护敏感应用
