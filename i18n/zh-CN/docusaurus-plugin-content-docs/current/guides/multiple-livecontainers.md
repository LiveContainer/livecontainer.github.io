---
title: 多个 LiveContainers
sidebar_position: 2
---

# 多个 LiveContainers

使用多个 LiveContainers 可以让您同时运行多个不同的应用,LiveContainers 之间*几乎*无缝的数据传输,充分利用您的免费应用槽位。

## 安装另一个 LiveContainer

前往 `设置 -> 安装另一个 LiveContainer`。

从那里您可以准备和安装如 `LiveContainer2` / `LiveContainer3`。

## 安装
点击"LiveContainer2"/"LiveContainer3"以(重新)安装另一个 LiveContainer。LiveContainer 将生成另一个 LiveContainer 的 ipa。请在 AltStore/SideStore 中打开生成的 LiveContainer ipa 进行安装,或者您可以保存并自定义它。

如果您需要游戏模式,可以在安装另一个 LiveContainer 之前启用"设置类别为游戏"和"允许游戏模式"

## 验证安装状态

在多个 LiveContainer 界面中:

- 打勾:另一个 LiveContainer 已安装并检测到
- 叉号:未检测到/未安装

## 跨 LiveContainers 使用应用

1. 在主 LiveContainer(蓝色)中,长按应用 -> 设置 -> 转换为共享App。
2. 重新打开其他 LiveContainer(灰色图标),您可以从它们启动共享应用。

## 关于应用调度
根据您启动应用的方式,LiveContainer 会以不同方式调度您的应用:

- 使用 启动URL 或 AppClip 时,第一个 LiveContainer(蓝色图标)始终默认启动。如果请求的应用已经在其他 LiveContainer 中运行,将切换到它。如果没有,LiveContainer 将尝试切换到空闲的 LiveContainer 并切换到它。
- 使用 Launch App 快捷指令时,调度过程在后台进行,会直接打开选定的空闲 LiveContainer。

如果所有 LiveContainer 都在使用中,系统会提示您在第二个/第三个 LiveContainer(灰色图标)中打开它,或终止当前应用并在第一个中重新启动它。

## 常见问题
- 应用在其他 LiveContainers 中不可见:未转换为共享应用
