---
title: FAQ
sidebar_position: 8
---

# FAQ

## 我如何...
- 将App添加到主屏幕：[添加到主屏幕](./guides/add-to-home-screen.md)
- 为 LiveContainer 中的App启用 JIT：[JIT 支持](./guides/jit-support.md)
- 安装/使用 LiveContainer2 或 LiveContainer3: [多个实例](./guides/multiple-livecontainers.md)
- 使用模块加载器：[模块](./guides/tweaks.md)
- 执行数据清理、钥匙串重置、应用组迁移：[数据管理](./guides/data-management.md)
- 同一个App同时使用多个容器(账户)：[多个/外部容器](./guides/containers-and-external-data.md)
- 在App中打开链接/URL/网页？

    - 使用 LiveContainer 的 `App` 标签中的链接图标并粘贴 URL
    - 您可以使用[此快捷指令](https://www.icloud.com/shortcuts/44ea82ce7ed8469ea24198c375db09a0)将网页共享到 LiveContainer。请确保在共享界面中将此快捷方式添加到"收藏"。


- 修改应该在 iOS 设置中的App设置：

    - 长按App -> 设置 -> （容器名称） -> 容器首选项


### App可以使用小组件/插件/扩展吗？

不能。它们需要额外的App ID。


## 故障排除

### 快速排查

1. 将 LiveContainer 更新到最新的稳定版/测试版。
2. 确认 AltStore/SideStore 设置无误且已刷新。
3. 直接在 AltStore/SideStore 中安装App，看问题是否仍然存在。如果存在，则是App本身的问题，请直接向其开发者报告。
4. 重现一次，如果崩溃发生，导出崩溃报告（`设置 -> 隐私和安全 -> 分析 -> 分析数据`）。
5. 记录 LiveContainer 构建版本（设置界面底部）、iOS 版本和设备型号。

### 我有特定的问题

- LiveContainer 安装或验证失败：[安装与签名错误](./faq/installing-livecontainer.md)
- 访客App导入/签名失败：[安装与签名错误](./faq/installing-livecontainer.md)
- JIT-Less 导入或诊断字段错误：[免JIT模式设置与诊断](./faq/jit-less-mode-setup.md)
- App启动后崩溃：[App崩溃](./faq/app-crashes.md)
- App工作不正常：[使用App](./faq/using-guest-apps.md)
- 对每个App单独设置以改进兼容性：[App设置](./guides/app-settings.md)

## 提交问题前

- 搜索：https://github.com/LiveContainer/LiveContainer/issues
- 兼容性标签：https://github.com/LiveContainer/LiveContainer/labels/compatibility
- 包括：
  - 确切的App名称/版本（如果App是开源App，请留下其仓库的链接）
  - LiveContainer 版本 + 提交哈希（**LiveContainer 的确切构建版本**，例如不仅仅是"3.1.0"，而是"3.1.0 c586e79"。您可以在 LiveContainer 设置标签底部找到。）
  - iOS 版本 + 设备型号
  - 确切的重现步骤
  - 导出的崩溃报告（`设置 -> 隐私和安全 -> 分析 -> 分析数据`，附加文件）
