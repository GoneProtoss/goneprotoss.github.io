---
layout: post
title:  "Debian ssh-copy-id Permission denied 问题"
date:   2023-07-04 21:13:07 +0800
categories: ssh
---

云服务器更换了操作系统，使用root登录创建用户后

打算在本地使用刚创建的普通用户免密码登录

得到如下报错

```bash
jimmy@JimmydeAir ~/workspace/example-app $ ssh-copy-id jimmy@xxx.xxx.xxx.xxx
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/Users/jimmy/.ssh/id_rsa.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
jimmy@xxx.xxx.xxx.xxx: Permission denied (publickey).
```

网上搜寻一番

最终在root登录后

修改配置

```bash
vim /etc/ssh/sshd_config

# 将此项的 no 改为 yes
# --> PasswordAuthenticatoin

# 然后重启 sshd
systemctl restart sshd
```

然后就好了