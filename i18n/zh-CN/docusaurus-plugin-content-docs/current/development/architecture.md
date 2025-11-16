---
title: 系统架构
---

# LiveContainer 架构概览

LiveContainer 不只是一个外壳应用，它在自身沙盒中重新托管任意 iOS 应用，提供 Tweak 注入、多任务以及 JIT-Less 运行。本页概述最新代码库的组成以及启动流程。

## 项目结构

### 主可执行文件（`LiveContainer`）
- 整个平台的入口，负责启动、数据管理、容器生命周期，并为每个 Guest 启动 LiveProcess。
- 未运行 Guest 时，会加载 SwiftUI 界面（`LiveContainerSwiftUI`）。

### LiveContainerSwiftUI
- 由 [@hugeBlack](https://github.com/hugeBlack) 贡献的 SwiftUI 前端。
- 内含本地化资源（`Localizable.xcstrings`）。欢迎通过 [Crowdin 项目](https://crowdin.com/project/livecontainer) 参与翻译。

### LiveProcess
- 轻量级辅助可执行文件，真正的 Guest Loader。它使用不同的 Bundle ID，在相同权限下运行，便于多任务和基于 PID 的 JIT。
- 负责修补 Guest 二进制、配置 dyld、注入 Tweaks，并把控制权交给应用入口。

### MultitaskSupport
- 实现应用内浮窗以及原生 iPadOS 窗口。
- 与主容器通信，在多个 LiveProcess 实例间同步状态与输入。

### SideStore 助手
- 与 SideStore 的刷新/JIT API 集成，提供后台证书刷新、源更新以及 URL Scheme 处理。

### TweakLoader
- 随应用发布的迷你 Substrate Loader。
- 通过新增 Load Command 注入到每个 Guest；若需要可以替换 `TweakLoader.dylib` 符号链接。

### ZSign
- 随附的签名工具（基于 [zhlynn/zsign](https://github.com/zhlynn/zsign)，使用 [Feather](https://github.com/khcrysalis/Feather) 分支）。
- LiveContainer 维护的版本针对多容器和自定义权限做了调整。

### 第三方库
- `fishhook`、`litehook` 与 `OpenSSL` 以子模块形式存在，为 Hook 与签名流程提供底层能力。

## 工作原理

### 预处理 Guest 可执行文件
- 重写 `__PAGEZERO` 段（`vmaddr = 0xFFFFC000`，`vmsize = 0x4000`），以便在 LiveProcess 中映射。
- 将 Mach-O 类型从 `MH_EXECUTE` 改为 `MH_DYLIB`。
- 注入新的 Load Command，在 `UIApplicationMain` 前加载 `TweakLoader.dylib`。

### 修补 `@executable_path`
- 新版本通过 litehook/fishhook Hook `dyld4::APIs::_NSGetExecutablePath`。
- Hook 调用原函数后，使 `config.process.mainExecutablePath` 可写并替换为 Guest 的路径。
- 旧的 SIGSEGV Hack 已废弃，但仍记录在 [主仓库 README](https://github.com/LiveContainer/LiveContainer/blob/main/README.md) 中。

### 修补 `NSBundle.mainBundle`
- 重写该属性，让请求 Bundle 元数据的 API 得到 Guest 的数据而不是 LiveContainer 的。

### 绕过库校验/签名
- 有 JIT 时，LiveContainer 会调用已配置的 Enabler 解除签名检查。
- 在 JIT-Less 模式下，内置的 ZSign 会使用 AltStore/SideStore 导入的证书重签每个 Guest 和 Tweak。
- 方案基于 [Restoring Dyld Memory Loading](https://blog.xpnsec.com/restoring-dyld-memory-loading)。

### 启动应用
- LiveProcess 使用 `dlopen` 加载修补后的二进制。
- `TweakLoader` 载入 CydiaSubstrate 以及当前所选的 Tweak 文件夹。
- Loader 找到入口点并跳转，Guest 随后照常调用 `UIApplicationMain`。

### 多账号与钥匙串半隔离
- 定义了 [128 个钥匙串访问组](https://github.com/LiveContainer/LiveContainer/blob/main/entitlements.xml)，容器会随机分配，从而降低同一应用不同容器之间的碰撞，方便多账号登录。

## 限制

- Guest 的原生权限不会被复制，只能使用赋予 LiveContainer 的基础权能。
- App 权限（摄像头、媒体库等）在所有 Guest 间共享。
- 容器共享同一沙盒，恶意应用可能读取其他应用的数据。
- 无法注册 App Extension（SpringBoard 不知道这些扩展，而且 App ID 数量有限）。
- 某些多任务场景下，硬件键盘或「iPhone 镜像」依旧会受限制。
- 远程推送和自定义 URL Scheme 通常不可用，因为 LiveContainer 无法在 SpringBoard 中注册它们。
