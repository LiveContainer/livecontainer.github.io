---
title: 数据管理
sidebar_position: 4
---

# 数据管理

## 清理未使用的数据文件夹

:::note
此操作仅在主 LiveContainer 中显示。
:::

删除不再被任何应用容器引用的本地数据文件夹。

## 移动 App Group 文件夹

:::note
此操作仅在主 LiveContainer 中显示。
:::

- `Move AppGroup from private to shared`
- `Move AppGroup from shared to private`

这两个操作在私有和共享位置之间移动 App Group 文件。如果目标位置不为空，它们将被阻止。

## 移动悬空的共享文件夹

:::note
此操作仅在主 LiveContainer 中显示。
:::

将未引用的共享资源移回私有位置：

- 未被共享应用使用的共享数据文件夹
- 未被共享应用使用的共享插件文件夹（除了 `TweakLoader.dylib`）

在迁移/重新安装中断后很有用。

## 清理钥匙串

从当前钥匙串范围删除钥匙串项目（`GenericPassword`、`InternetPassword`、`Certificate`、`Key`、`Identity`）。
请谨慎使用，因为这涉及范围很广，可能会使您退出登录。

## 清除图标缓存

清除当前加载的应用列表的应用图标缓存。

## 路径工具

当您需要手动检查文件或为调试提供确切路径时，请使用这些工具。

- `Copy ... Path`: 将 `App Group Container`、`Container` 或 `LiveContainer Bundle` 的完整路径复制到剪贴板。
- `Open in Filza`: 仅在 LiveContainer 中安装了 Filza 时显示，并直接在 Filza 中打开所选位置。
