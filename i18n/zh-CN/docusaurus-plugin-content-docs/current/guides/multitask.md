---
title: 多任务
---

# 多任务

LiveContainer 现在在最新的 iOS 上支持真正的多任务——无需越狱或利用漏洞。借助 Duy Tran 对 FrontBoardAppLauncher 的逆向成果以及多进程扩展，LiveContainer 可以让应用在独立的进程与窗口中运行，从而规避系统“最多运行 3 个 App”的限制。

你可以在应用内的虚拟窗口中同时打开多个应用。这些窗口可拖动、缩放，还能以原生画中画（PiP）方式显示。在 iPad 上，应用还可以以原生窗口模式运行，每个窗口对应一个系统窗口。如果需要，还可以在设置中默认以多任务模式启动应用。

## 使用方法

功能仍处于测试阶段，可能并非所有应用都可正常工作，部分应用会崩溃或出现异常。建议在愿意尝试的应用上谨慎使用。

1. 将应用转换为共享应用
2. 长按应用图标，选择「在多任务中运行」
3. 拖动窗口顶部栏可以移动窗口
4. 拖动右下角的缩放柄可调整窗口大小

:::note
1. 安装 LiveContainer（或共享应用）时，请在 SideStore/AltStore 中选择「保留扩展（Keep Extension）」才能启用多任务。
2. 若要为多任务窗口开启 JIT，需要使用支持按 PID 附加的 JIT 启用器。
:::

## 已知问题

`This container is currently in use livecontainer2`

当尝试让一个已经在其他 LiveContainer 运行过的应用进入多任务时，可能出现该错误。这不是 Bug，而是当前架构的限制。解决方式是重启另一个 LiveContainer 或终止该应用。

---

`lc.container.unableToMoveContainerFromLiveProcess`

这是旧版本残留数据导致的问题。解决步骤：

1. 在 LiveContainer 内安装 Filza
2. 在应用设置中找到该应用的 Container ID
3. 前往 设置 → 数据管理
4. 在「复制 App Group Container 路径」下点击「Open in Filza」
5. 进入 LiveContainer → Data → Application
6. 删除与该 Container ID 同名的文件夹
