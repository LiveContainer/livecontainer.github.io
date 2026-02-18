---
title: 安装与签名错误
sidebar_position: 5
---

# 安装与签名错误

本页涵盖了LiveContainer自身安装失败和 IPA 签名/导入失败。

## "The executable was signed with invalid entitlements"
需要 SideStore 0.6.2+/AltStore 2.2.1+ 来安装 LiveContainer 3.2.58。请考虑升级。

## "App使用最新证书签名，但其代码签名无效"或包含错误的大量警告"Invalid Signature"

1. 检查免JIT模式是否正确设置。有关更多信息，请参阅 [免JIT模式诊断](./jit-less-mode-setup.md)。
2. 如果诊断通过，从App设置强制重新签名App。

## LiveContainer 在导入 IPA 时崩溃

常见原因：

- 无效的 IPA 包结构
- 签名器问题
