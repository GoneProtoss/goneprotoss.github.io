---
layout: post
title:  "git https 模式下记住用户名密码"
date:   2023-07-04 21:13:05 +0800
categories: git
---

- 执行以下命令全局配置即可

```bash
git config --global credential.helper store
```