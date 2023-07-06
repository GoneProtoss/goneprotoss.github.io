---
layout: post
title:  "V2RayU Mac 不给打开"
date:   2023-07-06 16:02:14 +0800
categories: anti-wall
---

[原文](https://github.com/yanue/V2rayU/issues/1234) 感谢大佬救急！

更新了 macOS 之后，不知道抽什么风，V2RayU 打不开了，怎么搜都找不到解决方案，最后，在项目issue里面看到一个大佬的解决方案，解决了，留着备用

### 需要严格按照顺序，不能漏，需要从头到尾执行完

- 执行 `sudo codesign --force --deep --sign - /Applications/V2rayU.app`
- 右键软件，显示简介，勾选覆盖恶意软件保护
- 打开软件
- 执行 `sudo codesign --force --deep --sign - ~/.V2rayU/V2rayUTool`
- 执行 `sudo codesign --force --deep --sign - ~/.V2rayU/v2ray-core/v2ray`