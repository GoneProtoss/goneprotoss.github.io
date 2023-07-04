---
layout: post
title:  "记将 git remote 的 ssh 转成 https"
date:   2023-07-04 21:13:06 +0800
categories: git
---

工蜂，是的腾讯工蜂，炸了两天了

网页不定时让我重新扫码登录

本地 git 仓库频繁无法与远端交互 (用的 ssh 协议)

删除 ~/.ssh/konwn_hosts 问题依旧 (抽奖似的成功概率很低)

据闻 https 协议正常工作，故将远端切换至 https 协议

操作如下

```bash
git remote -v;

git remote rm origin;

git remote add origin 'https://user_name:password@git.code.tencent.com/project/repo.git';

# 可能还需要
git branch --set-upstream-to=origin/target_branch target_branch
```