---
title: 安装
sidebar_position: 1
---

# 安装

本页用于帮助你在两种安装路径之间做选择，并尽量避免常见配置问题。

:::warning
**关于第三方 LiveContainer 版本的重要提醒**

近期出现了若干闭源的第三方 LiveContainer 构建。请注意：所有应用都会被安装在 LiveContainer 内，这些第三方构建因此可以完全访问你的数据（包括钥匙串和账号密码）。  
:::

## 选择安装路径

| 差异点               | [Standalone LiveContainer](./installation/standalone.md) | [LiveContainer + SideStore](./installation/lc_sidestore.md) |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| 打包形态             | 仅包含 LiveContainer 主应用                              | LiveContainer 与内置 SideStore 打包在一起                   |
| 安装复杂度           | 基础流程更简单                                           | 步骤更多，工具选择更敏感                                    |
| 免费账号签名槽位压力 | 标准占用模型                                             | 通过内置刷新流程更省槽位                                    |
| 证书导入路径         | 从外部 AltStore/SideStore 导入                           | 安装后从内置 SideStore 导入                                 |

## 系统要求

- iOS/iPadOS 15+
- 多任务需要 iOS/iPadOS 16.0+
- AltStore 2.0+ 或 SideStore 0.6.0+ （取决于安装路径）

## 推荐顺序

1. 先从上表选择安装路径。
2. 完成该路径对应安装文档的全部步骤。
3. 导入证书并启用 JIT-Less 签名能力。
4. 在 JIT-Less 诊断页面进行验证。

## 安装后继续

- [JIT 支持](./guides/jit-support.md)
- [JIT-Less 设置与诊断](./faq/jit-less-mode-setup.md)
- [多实例 LiveContainer](./guides/multiple-livecontainers.md)
