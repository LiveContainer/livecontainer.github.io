---
title: JIT 支持
sidebar_position: 2
---

# JIT 支持

LiveContainer 支持多个常见 JIT 启用器。请在 `设置 -> JIT` 中进行配置。

## 选择JIT启用器
:::note
仅StikDebug/StikDebug(Another LiveContainer)支持iOS 26+。 
:::

对于 *StikDebug*, 选择 "StikDebug". 

对于 *安装在LiveContainer中的StikDebug*, 选择 "StikDebug(Another LiveContainer)". 

对于 *SideStore*, 选择SideStore。 请注意由于SideStore的JIT URL还未实装，你需要手动在SideStore中对当前LiveContainer启用JIT。 此方法不支持内置SideStore。

对于 *JitStreamer-EB* (已弃用), 选择 JitStreamer-EB。 如果你通过Wireguard VPN连接JitStreamer-EB服务器，且你未修改`WIREGUARD_SERVER_ADDRESS`，请将“地址”栏留空，否则请在“地址”栏输入你的服务器地址，包括(http/https)和端口(9172)。

对于 *SideJITServer/JITStreamer 2.0*, 请输入服务器地址和你的设备的UDID。

## 配置App
长按App->设置->启用“带JIT启动”，将App标记为需要JIT。LiveContainer将等待启用JIT，并尝试联系您配置的JIT启用器。

如果你使用的是iOS 26+，并且你的设备使用A15+或M2+（含），你还需要为每个App提供一个JIT脚本。请联系App开发者。您可以通过以下方式加载脚本：长按App->设置->选择JIT启动脚本。

## 安装StikDebug（另一个LiveContainer）
StikDebug可以在LiveContainer中安装和使用。应提供除当前LiveContainer之外的空闲LiveContainer来启动StikDebug
- 下载StikDebug ipa并将其安装在LiveContainer中
- 正常配置StikDebug（导入配对文件等）
- 将StikDebug转换为共享App
- 确保有除当前LiveContainer之外的空闲LiveContainer可用
- 连接到LocalDevVPN
- 点击“运行”
- StikDebug将在另一个LiveContainer中启动，并且所请求的应用程序应在启用JIT的情况下启动

## 在LiveContainer中为应用程序启用JIT的正确方法
0. 先不要为LiveContainer启用JIT
1. 如上所述设置JIT启用程序
2. 如上所述启用“JIT启动”
3. 点击运行
4. 如果您的JIT启用程序不支持自动启用，您需要从JIT启用程序为LiveContainer启用JIT，同时保持“等待JIT”提示打开。
