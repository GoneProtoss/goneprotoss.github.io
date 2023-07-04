---
layout: post
title:  "VBox 共享文件夹无权限问题"
date:   2023-07-04 21:13:09 +0800
categories: vm
---

在 VBox 里安装了一个 Debian 的虚拟机

打算共享文件夹，就如此配置

![截图]({{site.url}}/assets/vm/0.png)

谁料

```bash
jimmy@debian:~$ cd ./workspace/
-bash: cd: ./workspace/: Permission denied
```

然后，只需将所使用用户加入 vboxsf 组即可，即

```bash
sudo usermod -aG vboxsf $(whoami)
```

然后得重启虚拟机，然后就好啦

![截图]({{site.url}}/assets/vm/1.png)
