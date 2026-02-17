---
title: 仅LiveContainer
sidebar_position: 1
---

# 仅 LiveContainer

如果你不需要内置 SideStore，可选择本方案。

## 系统要求

- iOS/iPadOS 15+
   + 多任务需要 iOS/iPadOS 16.0+
- AltStore 2.2.1+ / SideStore 0.6.2+

## 下载
<table>
<tr>
<td>
稳定版
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/1.0/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200">
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200">
</a>
</td>
</tr>
<tr>
<td>
Nightly版
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200">
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200">
</a>
</td>
</tr>
</table>

## 安装
请使用SideStore/AltStore安装LiveContainer。安装完成后，请配置 JIT-Less 模式。该模式下，LiveContainer 会使用从 AltStore/SideStore 导入的证书为应用签名（见下方步骤）。

### JIT-Less 模式
在启动LiveContainer中的应用前，必须对其进行代码签名，因此需要从 AltStore/SideStore 获取证书和密码。

:::note
JIT-Less 并不代表不能启用 JIT，它只是让应用“启动时不强依赖 JIT”。如果你需要 JIT，请参考 JIT 配置指南。  

若配置失败，请先查看“免JIT模式诊断”页面。
:::

#### 配置（建议 AltStore 2.2.1+ / SideStore 0.6.2+）
- 打开 LiveContainer 设置
- 点击 “从 AltStore/SideStore 导入证书”
- AltStore/SideStore 会弹出是否导出证书的提示。若没出现，请保持 AltStore/SideStore 在后台，再次点击导入按钮。
- 在 SideStore 点击 “Export”，或在 AltStore 设置密码后导出
- 打开 “J免JIT模式诊断”，点击 “免JIT模式测试”
- 若显示 “免JIT模式测试通过”，说明配置成功

:::note
如果你通过 AltServer 重新安装了 AltStore/SideStore，需要重新执行以上导入流程，否则可能导致需要重装应用。
:::

### 安装应用
- 打开 LiveContainer，点击右上角加号并选择 IPA 文件
- 选择下次启动的应用
- 长按应用可进入管理菜单