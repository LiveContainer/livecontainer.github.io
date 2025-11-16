---
title: 兼容性信息
---

# 兼容性信息

并非所有 iOS 应用都能在 LiveContainer 中运行。提交 Issue 前，请先完成以下检查并收集所需资料。

## 查看现有报告

- 浏览 [compatibility 标签](https://github.com/LiveContainer/LiveContainer/labels/compatibility)，确认该应用是否已有工单
- 如果 Nightly 或 Beta 已经修复，请在原 Issue 下追加反馈，而不是重复创建

## 自助排查

1. **更新 LiveContainer** 至最新稳定版或 Nightly
2. 确认应用是 **私有** 还是 **共享**，很多问题只在共享容器出现
3. 记录应用使用的是 **JIT** 还是 **JIT-Less**。先运行 [JIT-Less 诊断](/docs/guides/jit-less-diagnose-page) 以验证证书
4. 若启用了 Tweaks，请暂时关闭（长按应用 → 设置 → Tweak 文件夹 → `None`）排除冲突
5. 复现问题后立即进入 **设置 → 数据管理 → 导出日志**，在报告中附上 zip
6. 说明应用是否在 **多任务** 模式或另一个 LiveContainer 实例中运行

## 提交新 Issue

在 [LiveContainer/issues](https://github.com/LiveContainer/LiveContainer/issues/new/choose) 创建工单时，请包含：

- 应用名称、Bundle ID、版本号
- 设备型号、iOS/iPadOS 版本、LiveContainer 版本（稳定/夜ly + 具体号）
- 应用是私有/共享、JIT/JIT-Less、是否启用多任务或 Tweaks
- 明确的复现步骤，以及界面异常的截图/视频
- 导出的日志或崩溃报告（若有 Panic，可在 Xcode 或「设置 → 隐私与安全性 → 分析记录」获取）

信息越完整，维护者越容易复现并修复问题。
