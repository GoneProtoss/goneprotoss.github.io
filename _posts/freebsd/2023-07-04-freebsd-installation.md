---
layout: post
title:  "安装FreeBSD小记"
date:   2023-07-04 21:13:04 +0800
categories: freebsd
---

### Hyper-V 安装 FreeBSD
- 省去 Hyper-V 新建虚拟机过程，我用的1代配置，分配了2C 4G
- 按照道长的教程安装基础系统 [教程章节位置](https://book.freebsdcn.org/di-er-zhang-an-zhuang-freebsd/di-ling-jie-tu-jie-an-zhuang)
- 重启进入系统后按照此教程配置好网络 [教程章节位置](https://book.freebsdcn.org/di-er-zhang-an-zhuang-freebsd/di-ling-jie-tu-jie-an-zhuang)
- 网络通了以后配置好 SSH [教程章节位置](https://book.freebsdcn.org/di-er-zhang-an-zhuang-freebsd/di-wu-jie-xshell-an-zhuang-yu-ssh-pei-zhi)
- 安装 zerotier
```bash
pkg install -y net/zerotier net/ngrep textproc/jq
sysrc zerotier_enable=YES
service zerotier start
zerotier-cli join $YOUR_NETWORK_ID
```
- 因为我怕sshd没开机自启所以我自欺欺人的加了这个
```bash
sysrc sshd_enable=YES
```
- 然后我就可以愉快地用 zerotier 网络内的机器连接了
- 接下来添加国内软件源镜像

```bash
root@freebsd-hyper-v:~ # pkg install ca_root_nss
root@freebsd-hyper-v:~ # mkdir -p /usr/local/etc/pkg/repos/
root@freebsd-hyper-v:~ # vim /usr/local/etc/pkg/repos/ustc.conf

ustc: {
url: "pkg+https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/quarterly",
mirror_type: "srv",  
signature_type: "none",  
fingerprints: "/usr/share/keys/pkg",
enabled: yes
}
FreeBSD: { enabled: no }


root@freebsd-hyper-v:~ # pkg update -f
root@freebsd-hyper-v:~ # pkg upgrade
```