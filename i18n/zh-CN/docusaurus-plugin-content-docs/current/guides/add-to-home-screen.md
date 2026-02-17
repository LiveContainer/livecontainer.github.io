---
title: 添加到主屏幕
---

# 添加到主屏幕

将应用添加到主屏幕有 3 种方式。其中第一种「Launch App 快捷指令」是最佳方案。

## 方法 1：Launch App 快捷指令（推荐）

:::note
该功能需要 LiveContainer 3.6.65+，iOS 16+。

请确保安装 LiveContainer 时至少包含 `LaunchAppExtension`与 `LaunchAppExtensionHelper` 扩展（安装时选择 `Use Main Profile` 或 `Keep All Extensions`）。
:::

这是推荐的主屏幕添加方式。它可以直接启动应用，不需要先进入 LiveContainer 主界面，并且会自动寻找空闲的 LiveContainer 来打开应用。相比下面其他方法，每次启动大约可节省 1~2 秒。

按以下步骤通过 Launch App 快捷指令添加到主屏幕：

### 保存图标并复制启动 URL

:::note
如果某个应用有多个容器，请先长按应用并选择目标容器，再获取该容器的启动 URL。
:::

1. 保存应用图标：长按应用 -> 点击 `Add to Home Screen` -> 点击 `Save App Icon` -> 选择图标样式 -> 保存（后续会用到）。
2. 复制启动 URL：长按应用 -> 点击 `Add to Home Screen` -> 点击 `Copy Launch URL`。
<p>
<img height="500px" src="/img/add-to-home-screen/1.jpg" />
</p>

### 创建并配置快捷指令

3. 打开 iOS 的快捷指令（Shortcuts）App。如果找不到，请先从 App Store 下载。
4. 点击右上角 `+` 创建新快捷指令。
5. 在 `Search Actions` 中搜索 `Launch App`，选择 LiveContainer 的动作并添加到快捷指令。
6. 点击第一条动作中的灰色 `Launch URL` 文本，粘贴你在步骤 2 复制的启动 URL。
7. 点击 `x` 关闭键盘。
8. 点击播放/运行按钮测试快捷指令。若应用成功打开，说明快捷指令配置正确。

<p>
<img height="500px" src="/img/add-to-home-screen/2.jpg" />
<img height="500px" src="/img/add-to-home-screen/3.jpg" />
<img height="500px" src="/img/add-to-home-screen/4.jpg" />
<img height="500px" src="/img/add-to-home-screen/6.jpg" />
<img height="500px" src="/img/add-to-home-screen/7.jpg" />
</p>

### 把图标添加到主屏幕

9. 回到快捷指令编辑页面。如果已关闭，点击该快捷指令右上角 `...` 重新打开。
10. 点击分享按钮，下滑并选择 `Add to Home Screen`。
11. 点击图标下方文本，修改显示名称。
12. 点击 `Image` -> `Choose File`，选择步骤 1 保存的图标文件。
13. 点击 `Add`，将图标添加到主屏幕。
14. 若要继续添加其他应用，可长按该快捷指令并点击 `Duplicate`，然后把 Launch URL 改成目标应用的新 URL。
<p>
<img height="500px" src="/img/add-to-home-screen/8.jpg" />
<img height="500px" src="/img/add-to-home-screen/9.jpg" />
<img height="500px" src="/img/add-to-home-screen/10.jpg" />
</p>

### 把 SideStore 添加到主屏幕

如果你安装的是 `LiveContainer+SideStore` 版本，也可以把 SideStore 添加到主屏幕。创建一个快捷指令，并将 Launch URL 设为 `sidestore://` 即可。

## 方法 2：Launch URL 快捷指令

这个方法与“Launch App 快捷指令”方法基本一致，仅需要把LiveContainer的“Launch App”动作替换为“打开URL”。

### 创建并配置快捷指令

3. 打开 iOS 的快捷指令（Shortcuts）App。如果找不到，请先从 App Store 下载。
4. 点击右上角 `+` 创建新快捷指令。
6. 在 `Search Actions` 中搜索 `打开URL`。
7. 点击灰色 `URL` 文本，粘贴你在步骤 2 复制的启动 URL。
8. 点击 `x` 关闭键盘。
9. 点击播放/运行按钮测试快捷指令。若应用成功打开，说明快捷指令配置正确。

## 方法 3：创建 App Clip（不推荐）

你也可以通过创建 App Clip 把应用添加到主屏幕，但不推荐。原因是：App Clip 会一直留在应用切换器中，启动需要额外跳转，而且即使删除图标后，设置中的 MDM 描述文件仍会保留，需要手动清理。

1. 长按应用 -> 点击 `Add to Home Screen` -> 点击 `Create App Clip` -> 选择图标样式 -> 点击 `Allow` 下载描述文件。
2. 打开 iOS 设置 -> 点击 `Profile Downloaded` -> 在弹窗中点击 `Install` 并完成安装。
3. 完成后即可在主屏幕看到对应图标。
