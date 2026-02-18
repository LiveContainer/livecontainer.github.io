---
title: 安装
sidebar_position: 1
---

# 安装
:::warning
近期出现了若干闭源的第三方 LiveContainer 版本。请注意：所有应用都会被安装在 LiveContainer 内，这些第三方构建因此可以完全访问你的数据（包括钥匙串和账号密码）。  
:::

:::warning
以下的自签工具**明确**不受支持，**请不要**用他们安装LiveContainer: Sideloadly, 爱思助手/3u Tools, NB助手, 以及大部分在线签名工具。

尽管其他未列出的工具也许能正确安装LiveContainer，我们仍推荐按照我们的指南安装LiveContainer
:::

## 选择安装路径

| 版本               | [仅 LiveContainer](./installation/standalone.md) | [LiveContainer + SideStore](./installation/lc_sidestore.md) |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| 打包形态             | 仅包含 LiveContainer 主应用                              | LiveContainer 与内置 SideStore 打包在一起                   |
| 免费账号签名槽位 | LiveContainer需要一个槽位，（设备上的自签工具也需要一个槽位） | LiveContainer和内置的SideStore共享槽位 |

## 系统要求

- iOS/iPadOS 15+
- 多任务需要 iOS/iPadOS 16.0+
- AltStore 2.2.1+ 或 SideStore 0.6.2+ （仅 LiveContainer）

## 推荐顺序

1. 先从上表选择要安装的版本。
2. 请按照安装指南操作。
3. 导入证书并启用 JIT-Less 签名能力。
4. 在 JIT-Less 诊断页面进行验证。