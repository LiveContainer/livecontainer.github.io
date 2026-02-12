---
title: LiveContainer + SideStore
sidebar_position: 2
---

# LiveContainer + SideStore

该版本将 SideStore 内置到 LiveContainer 中，可以在免费开发者账号场景下更节省签名槽位。

你可以通过 [Impactor](https://github.com/khcrysalis/Impactor)（推荐）、[iloader](https://github.com/nab138/iloader) 或已有的独立 [SideStore](https://sidestore.io) 进行安装。

## 适用场景

- 你使用免费开发者账号，并希望尽量节省可用槽位。
- 你能接受比独立版稍复杂的安装流程。
- 你希望 LiveContainer 与 SideStore 使用一体化方案。

:::note
如果你在 Windows 上安装 LiveContainer + SideStore，需要先安装 [iTunes](https://support.apple.com/en-us/106372)，以便侧载工具使用与 Apple 设备通信所需驱动。  
开始前请先连接设备并在设备上选择“信任此电脑”。
:::

## 下载
请先下载 LiveContainer + SideStore 的 IPA：
|稳定版|Nightly|
|:-:|:-:|
|<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer+SideStore.ipa" target="_blank"><img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="下载 .ipa" width="200" /></a>|<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer+SideStore.ipa" target="_blank"><img src="https://github.com/CelloSerenity/altdirect/blob/main/assets/png/Download_Blue.png?raw=true" alt="下载 .ipa" width="200" /></a>|

## 方法 1：Impactor
[Impactor](https://github.com/khcrysalis/Impactor)（原名 Plume Impactor）是由 [khcrysalis](https://github.com/khcrysali) 开发的跨平台现代侧载工具。推荐优先使用该工具，因为它能更完整处理 LiveContainer 所需权限。

1. 根据你的系统与架构，从 [GitHub](https://github.com/khcrysalis/Impactor/releases/latest) 下载对应版本。请下载 “Impactor”，不是 “plumesign”。
2. 安装并打开 Impactor。
3. 确认右上角出现你的设备。若未出现，请先检查上面的注释，或更换 USB 接口/线材。
4. 点击设置（齿轮）图标，选择 “Add Account” 登录 Apple ID。若登录有问题，请参考 [SideStore 错误代码文档](https://docs.sidestore.io/docs/troubleshooting/error-codes) 或联系 Impactor 开发者。
5. 返回上一级界面。
6. 将 LiveContainer + SideStore IPA 拖入 Impactor。
7. 确认勾选 “Only Register Main Bundle”。
8. 点击 “Install”。
9. 打开 iOS 设置 -> 通用 -> VPN 与设备管理，验证 LiveContainer。
10. 前往下方 [安装后设置](#安装后设置) 完成后续配置。

<p>
<img width="300px" src="/img/lc_sidestore/1.jpg" />
<img width="300px" src="/img/lc_sidestore/2.jpg" />
<img width="300px" src="/img/lc_sidestore/3.jpg" />
</p>

## 方法 2：iloader
:::note
在当前阶段，iloader 不能正确处理 LiveContainer 所需的部分权限（如 keychain access groups），因此钥匙串隔离/多容器能力可能无法正常工作。
:::

[iloader](https://github.com/nab138/iloader) 是由 [nab138](https://github.com/nab138) 开发的跨平台现代侧载工具。

你可以参考 [SideStore 官方安装文档](https://docs.sidestore.io/docs/installation/install) 安装 LiveContainer + SideStore；在选择要侧载的应用时，将 “SideStore” 改为 “LiveContainer+SideStore”。

安装后，请前往 [安装后设置](#安装后设置) 完成后续流程。  
另外，你也可以在内置 SideStore 中重新安装 LiveContainer + SideStore IPA，以修正权限问题。

## 方法 3：从独立 SideStore 迁移
你也可以从“独立 LiveContainer + 独立 SideStore”迁移到 “LiveContainer + SideStore” 一体版，这样可为其他应用或额外 LiveContainer 节省一个免费槽位。

在独立 SideStore 中直接安装 LiveContainer + SideStore IPA 即可。该过程等同升级，数据会保留。安装时请务必选择 “Keep All Extensions (Use Main Profile)”。完成内置 SideStore 配置后，可卸载独立 SideStore。

安装后，请前往 [安装后设置](#安装后设置) 完成后续流程。

## 安装后设置
安装完成后，需要从 SideStore 导入证书，使 LiveContainer 也能签名应用。

1. 在 “Apps” 页面左上角点击 SideStore 按钮，打开 SideStore。
2. 进入 SideStore 设置并登录。如果你之前装过 SideStore，可能看起来已登录；但内置 SideStore 无法直接读取旧凭据，建议先退出后重新登录。
3. 连接 LocalDevVPN，进入 “My apps” 页面并点击 “Refresh All”。
4. 退出 SideStore 并返回 LiveContainer。可通过 SideStore “Apps” 页的退出按钮，或系统多任务切换器返回。
5. 在 LiveContainer 设置中点击 “Import Certificate from SideStore”，并确认。
6. 若按钮从 “Import Certificate” 变成 “Remove Certificate”，表示导入成功。可前往 “JIT-Less Mode Diagnose” 页面进一步验证。

<p>
<img height="500px" src="/img/lc_sidestore/4.jpg" />
<img height="500px" src="/img/lc_sidestore/5.jpg" />
<img height="500px" src="/img/lc_sidestore/6.jpg" />
<img height="500px" src="/img/lc_sidestore/7.jpg" />
</p>

## 自动刷新快捷指令
自动刷新快捷指令的用法与独立 SideStore 基本一致，只需将原来 SideStore 的 “Refresh All Apps” 动作替换为 LiveContainer 的对应动作。

## 下一步

- [安装总览](../installation.md) — 对比路径差异并评估迁移方案。
- [JIT 支持](../guides/jit-support.md) — 安装后配置 JIT 启用方式。
- [JIT-Less 诊断页面](../guides/jit-less-diagnose-page.md) — 校验证书导入和签名状态。
