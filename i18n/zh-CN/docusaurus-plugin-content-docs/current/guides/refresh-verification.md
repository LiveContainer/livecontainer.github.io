# 检查刷新是否成功

我们最近注意到有报告称 LiveContainer(+SideStore) 即使在及时刷新后也会过期。虽然这超出了 LiveContainer 的范围，但本指南旨在帮助您使用 StikDebug 的"App Expiry"工具检查刷新是否被iOS认为有效，以及如何修复。

## 预备知识
两个因素决定iOS上的App是否有效：证书和配置文件(Provisioning Profile)。

使用免费开发者账号进行侧载时，Apple 会颁发有效期为 365 天的证书，与有效期为 7 天的配置文件，这就是为什么免费开发者账号侧载的应用需要每 7 天刷新一次。

配置文件包含可以安装的设备的 UDID，最重要的是，App允许拥有的所有权限。

每次启动应用时，iOS 都会检查是否存在有效的配置文件，即未过期的且包含App所需所有权限的配置文件。如果其中任何一个条件不满足，iOS 会显示"&lt;应用名称&gt; 不再可用"错误，表示应用已过期。
<img height="500px" src="/img/refresh-verification/5.jpg" />
从 SideStore 0.6.0 和 AltStore 2.2.0 开始，刷新是通过安装新的配置文件来进行的。


## 如何检查
0. 首先刷新您的应用
1. 在您的设备上以任何方式安装 [StikDebug 3.0.1+](https://github.com/StephenDev0/StikDebug)（SideStore、LiveContainer 等）
2. 按照 [StikDebug 的官方指南](https://github.com/StephenDev0/StikDebug?tab=readme-ov-file#how-to-enable-jit) 设置 StikDebug
3. 不启用 JIT，而是点击"Tools"-> "App Expiry"

<p class="img-scroll">
<img height="500px" src="/img/refresh-verification/1.jpg" />
<img height="500px" src="/img/refresh-verification/2.jpg" />
</p>

4. 检查已安装应用的过期日期。过期日期文本的颜色表示距过期还有多少时间。最重要的是，验证每个应用的最新配置文件是否包含所有必需的权限。
5. 如果您在最新配置文件中看到"Missing Entitlements"，则在刷新期间安装的配置文件无效，您的应用将比预期更早过期。
<p class="img-scroll">
<img height="500px" src="/img/refresh-verification/3.jpg" />
<img height="500px" src="/img/refresh-verification/4.jpg" />
</p>

## 如何修复
这个问题通常由 SideStore 数据库中的权限与应用实际需要的权限之间的不匹配引起。要修复此问题，请在 SideStore 中重新安装应用的 IPA 以刷新 SideStore 数据库中的权限，然后再次检查 StikDebug 以验证配置文件现在是否有效。
