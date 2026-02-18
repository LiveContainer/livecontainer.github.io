---
title: 从源码构建
---

# 构建

如果你想自行编译或贡献代码，请按照以下步骤操作。

## 1. 克隆并同步子模块

```bash
git clone --recurse-submodules https://github.com/LiveContainer/LiveContainer.git
# 如果之前已克隆：
git submodule update --init --recursive
```

仓库依赖 `fishhook`、`litehook`、`OpenSSL` 等子模块，必须在构建前准备好。

## 2. 安装依赖

- Xcode 15.4+，并包含 iOS 18 SDK（更新的 SDK 也可以，注意部署版本）。
- 一个付费或免费的 Apple 开发者账号，用于签名调试版本。
- （可选）Python 3，用于运行 `update_json.py` 等辅助脚本。

## 3. 配置签名

打开 `xcconfigs/Global.xcconfig`，把 `DEVELOPMENT_TEAM[config=Debug]`（以及需要时的 Release）设置为你的 Team ID，并确保 Bundle ID 唯一，方便在设备上安装多个版本。

## 4. 在 Xcode 中构建

1. 打开 `LiveContainer.xcodeproj`
2. 选择 `LiveContainer` Scheme
3. 选择目标真机设备（LiveContainer 必须在真机运行）
4. 点击 **Run**
