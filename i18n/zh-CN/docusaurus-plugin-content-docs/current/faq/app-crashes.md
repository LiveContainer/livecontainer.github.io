---
title: 应用程序崩溃
sidebar_position: 7
---

# 应用程序崩溃

## LiveContainer 在 iOS 18.2+ 上无法打开

使用 LiveContainer 3.0.0 或更新版本。如果升级后仍然失败，请重新启动并再试一次。

## LiveContainer 在 iOS 26.4+ 上崩溃
使用 LiveContainer 3.6.65+ 或更新版本。

## `could not register fairplay decryption, mremap_encrypted() => -1`

IPA 可能没有解密。使用正确解密的 IPA 包。

## `App returned from its main function with code 0`

IPA 格式无效，请找另一个。如果您尝试在 SideStore/AltStore 中 sideload 此 IPA，它将报告"此应用程序的格式无效。"错误。

## 应用程序仍然崩溃

1. 搜索 issue 并查看是否有解决方案。
2. 直接在 SideStore/AltStore 中 sideload 应用程序，看它是否可以在 sideload 环境中工作。如果不能，请找到另一个有效的 IPA。

如果您找不到解决方案，请随时提交兼容性 issue。

不幸的是，由于大多数应用程序是闭源的，我们很难确定问题所在，所以没有预计解决时间。
