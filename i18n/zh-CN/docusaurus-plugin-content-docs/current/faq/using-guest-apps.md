---
title: 使用App
sidebar_position: 8
---

# 使用App

## 为什么我的App不出现在第二个 LiveContainer 中？

只有共享App在多个 LiveContainer 实例中可见。

- 长按App -> `设置` -> `转换为共享App`

## 无法选择文件 / 文件选择器不工作 / App在未启用通知的情况下无法继续

启用App特定的修复：

- 长按App -> `设置` -> 启用 `修复文件导入`
- 长按App -> `设置` -> 启用 `修复本地通知`

## Safari 登录返回"地址无效"

请参阅已知问题和解决方案：[Issue #242](https://github.com/LiveContainer/LiveContainer/issues/242)

## App渲染分辨率错误
这最常发生在横向或旧游戏中。

尝试启用方向锁定：
- 长按App -> `设置` -> 将方向锁定设置为 `横向`

如果您的App相对较旧，启用方向锁定不起作用，请参阅 [issue #457](https://github.com/LiveContainer/LiveContainer/issues/457)
