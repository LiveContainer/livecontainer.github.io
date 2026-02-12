---
title: 插件（Tweaks）
---

# 使用插件

LiveContainer 支持在不修改 IPA 的情况下注入插件。由于并非所有插件都能与 TweakLoader 完全兼容，若条件允许依旧建议直接对应用进行注入。

LiveContainer 自带的 TweakLoader 会自动加载 CydiaSubstrate 与插件，并在你安装的每个应用中注入。如有需要，可以替换 `TweakLoader.dylib` 符号链接来自定义实现。

## 加载机制

当应用启用 TweakLoader 启动时，LiveContainer 的加载顺序为：

1. 先加载 CydiaSubstrate
2. 再加载 `Tweaks` 根目录中的全局插件
3. 最后加载该应用选定的插件文件夹（递归加载）

当前导入器支持：

1. `.dylib`
2. `.framework`

`TweakLoader.dylib` 本身不会作为插件再次加载。

## 全局插件与应用专属插件

| 类型 | 存放位置 | 生效范围 |
| --- | --- | --- |
| 全局插件 | `Tweaks` 根目录 | 对所有应用生效 |
| 应用专属插件 | `Tweaks` 下的子文件夹 | 仅对选择该文件夹的应用生效 |

:::note
插件管理仅限主 LiveContainer（蓝色）以及私有应用使用。如果想在共享应用中启用插件，请先将应用转换为私有，添加插件后再改回共享，插件依旧有效。
:::

为应用分配专属插件文件夹：

1. 打开 `Tweaks` 标签页。
2. 新建一个文件夹。
3. 在该文件夹中导入插件。
4. 打开应用设置，将 `Tweak Folder` 设为该文件夹。

对于共享应用，`Tweak Folder` 在应用设置中是只读。需要时可先转为私有应用，配置后再转回共享。

## 管理插件

1. 导入：`Tweaks` -> `+` -> `Import Tweak`
2. 新建文件夹：`Tweaks` -> `+` -> `New Folder`
3. 重命名：长按条目 -> `Rename`
4. 删除：条目左滑 -> `Delete`

## 关于插件签名

插件需要签名后才能稳定加载。

LiveContainer 会在应用启动前自动处理签名：

1. 检查插件文件与 `TweakInfo.plist` 记录。
2. 当文件变化或签名失效/过期时自动重签。
3. 重签后更新 `TweakInfo.plist`。

你也可以在 `Tweaks` 页面点击 `Sign` 手动强制重签。

## 相关应用设置

以下设置会直接影响插件加载：

1. `Don't Inject TweakLoader`：打补丁/签名时不注入 TweakLoader 加载命令。
2. `Don't Load TweakLoader`：与上一个选项配合时，运行时也不再主动加载 TweakLoader。

两个选项都开启时，该应用不会加载任何插件。

另请参阅：[App Settings](./app-settings.md)

## 故障排查

1. 某个应用不生效：
先检查该应用的 `Tweak Folder` 是否正确，且应用设置里没有禁用 TweakLoader。
2. 所有应用都不生效：
检查插件是否放在 `Tweaks` 根目录并且已签名。
3. Framework 插件加载失败：
检查该 framework 是否包含有效的 `Info.plist` 和 `CFBundleExecutable`。
4. 按流程仍失败：
该插件可能与 TweakLoader 兼容性不足，建议尝试直接注入。
