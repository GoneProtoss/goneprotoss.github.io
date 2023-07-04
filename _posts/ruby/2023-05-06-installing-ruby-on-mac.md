---
layout: post
title:  "在 Mac 上配置 Ruby"
date:   2023-05-06 21:37:26 +0800
categories: ruby
---

### 安装

```bash
brew install ruby
```

然后在 `~/.zshrc` 中加入以下内容 

```bash
# Ruby 环境变量
export PATH="/usr/local/opt/ruby/bin:$PATH"
export PATH="/usr/local/lib/ruby/gems/3.2.0/bin:$PATH"
```

然后配置国内源

```bash
$ gem sources
$ gem sources --remove https://gems.ruby-china.com
https://gems.ruby-china.com removed from sources
$ gem sources -a https://mirrors.ustc.edu.cn/rubygems/
https://mirrors.ustc.edu.cn/rubygems/ added to sources
$ bundle config mirror.https://rubygems.org https://mirrors.ustc.edu.cn/rubygems/ 
You are replacing the current local value of mirror.https://rubygems.org, which is currently "https://gems.ruby-china.com"
```

然后一切准备就绪

每次 `brew` 更新完 ruby gem 路径就变了，用这个查看

```bash
gem environment
```