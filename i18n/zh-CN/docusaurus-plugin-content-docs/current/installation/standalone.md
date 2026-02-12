---
title: Standalone LiveContainer
sidebar_position: 1
---

# Standalone LiveContainer

这是大多数用户的标准安装路径。如果你希望流程尽可能简单，且不需要内置 SideStore，请优先选择本方案。

## 适用场景

- 你已经在使用 AltStore 或 SideStore。
- 你希望安装流程尽量直接。
- 你不需要内置 SideStore 的集成版本。

## 系统要求

- iOS/iPadOS 15+
   + 多任务需要 iOS/iPadOS 16.0+
- AltStore 2.0+ / SideStore 0.6.0+

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
- 建议优先配置 JIT-Less 模式。该模式下，LiveContainer 会使用从 AltStore/SideStore 导入的证书为应用签名（见下方步骤）。

### JIT-Less 模式（无需 JIT，推荐）
如果你不介意每次启动都手动启用 JIT，可以跳过这部分，但不推荐。不开启 JIT 时，客体应用必须完成签名，因此需要从 AltStore/SideStore 获取证书和密码。

:::note
JIT-Less 并不代表不能启用 JIT，它只是让应用“启动时不强依赖 JIT”。如果你需要 JIT，请参考下文中的 JIT 相关指南。  
若配置失败，请先查看“JIT-Less 诊断页面”。
:::

#### 配置（建议 AltStore 2.2.1+ / SideStore 0.6.2+）
- 打开 LiveContainer 设置
- 点击 “Import Certificate from AltStore/SideStore”
- AltStore/SideStore 会弹出是否导出证书的提示。若没出现，请保持 AltStore/SideStore 在后台，再次点击导入按钮。
- 在 SideStore 点击 “Export”，或在 AltStore 设置密码后导出
- 打开 “JIT-Less Mode Diagnose”，点击 “Test JIT-Less Mode”
- 若显示 “JIT-Less Mode Test Passed”，说明配置成功

:::note
如果你通过 AltServer 重新安装了 AltStore/SideStore，需要重新执行以上导入流程，否则可能导致需要重装应用。
:::

### 安装应用
- 打开 LiveContainer，点击右上角加号并选择 IPA 文件
- 选择下次启动的应用
- 长按应用可进入管理菜单

### 下一步

- [安装总览](../installation.md) — 对比不同安装路径，按需切换方案。
- [多实例 LiveContainer](../guides/multiple-livecontainers.md) — 运行更多容器并共享应用。
- [JIT 支持](../guides/jit-support.md) — 配置自动 JIT 启用器或脚本。
- [JIT-Less 诊断页面](../guides/jit-less-diagnose-page.md) — 校验证书导入与签名状态。
- [Tweaks](../guides/tweaks.md) — 全局或按应用注入 CydiaSubstrate 插件。
- [多任务](../guides/multitask.md) — 以可调窗口方式运行客体应用。
- [锁定与隐藏应用](../guides/lock-app.md) — 使用 Face ID 或严格隐藏模式保护敏感应用。
