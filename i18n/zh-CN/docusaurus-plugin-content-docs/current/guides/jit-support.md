---
title: JIT 支持
---

# JIT 支持

LiveContainer 能与多种 JIT 启用器协同工作，可在 iOS 17.4–18.x 以及最新的 iOS 26+ 测试版上运行未签名二进制。所有设置均位于 **设置 → JIT**。

## 标记需要 JIT 的应用

1. 长按应用 → **设置** → 开启 **使用 JIT 启动**
2. 打开 LiveContainer，但暂时不要触发 JIT
3. 设置下文的任意启用器
4. 确认启用器的前置条件已满足（VPN、配对电脑等）
5. 点击 **运行**。LiveContainer 会进入「等待 JIT」状态，直到启用器回复
6. 如果启用器无法自动附加，请在提示框存在期间切到启用器手动触发

## 内置启用器

### StikDebug（原 StikJIT，推荐）

[StikDebug](https://apps.apple.com/us/app/stikdebug/id6744045754) 是 iOS 17.4+ 和 iOS 26+ 脚本流程里最顺畅的解决方案。

1. 安装 StikDebug 并导入 AltStore/SideStore/AltServer 生成的配对文件
2. 在应用设置中启用 **使用 JIT 启动**
3. 进入 **设置 → JIT 启用器**，选择 **StikDebug**。若要使用 iOS 26+ 自动化脚本，可在该界面粘贴脚本
4. 启动应用。LiveContainer 会尝试自动请求 StikDebug。若失败，请在提示框仍在时切换到 StikDebug 并点击「Enable JIT for LiveContainer」

### SideStore（0.6.2+）

SideStore 提供 JIT API，LiveContainer 可以调用。但由于 URL Scheme 暂时不会自动跳回，需要手动完成流程：

1. 在设置中选择 **SideStore** 作为启用器
2. 出现「等待 JIT」后切到 SideStore → **My Apps**
3. 确保 SideStore VPN 已连接（或用飞行模式+Wi-Fi 的方式）
4. 长按 LiveContainer → **Enable JIT**，SideStore 成功后再返回 LiveContainer

### SideJITServer

[SideJITServer](https://github.com/nythepegasus/SideJITServer) 允许你自建配对服务。

1. 部署 SideJITServer，并记录 HTTP 地址与设备 UDID
2. 在 LiveContainer 的 **设置 → JIT 启用器 → SideJITServer** 中填入地址与 UDID
3. 启动应用，LiveContainer 会自动访问你的服务器

### AltStore/AltServer 脚本

最新版本提供脚本输入框，可粘贴 AltStore/AltServer 社区分享的自动化脚本（包含 iOS 26+ 版本）。这些脚本通常要求设备和 AltServer 处在同一网络。

1. 从 AltStore Discord 或 Wiki 复制脚本
2. 粘贴到 JIT 设置中的脚本字段
3. 运行标记为「使用 JIT 启动」的应用。LiveContainer 会执行脚本并在提示框中显示输出

## 故障排查

- 先使用 **JIT-Less 诊断页面**（设置 → JIT-Less Mode Diagnose）确认证书和钥匙串状态
- 如果提示框立刻关闭，检查启用器是否已在设置中选中，LiveContainer 是否有权限打开其 URL Scheme
- 通过 **设置 → 数据管理 → 导出日志** 收集日志并附加到 Issue
- 多任务窗口需要支持按 PID 附加的启用器（如 StikDebug）。SideStore 的手动启用无法满足此需求
