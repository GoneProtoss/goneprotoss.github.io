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
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
bundle config mirror.https://rubygems.org https://mirrors.tuna.tsinghua.edu.cn/rubygems
```

然后一切准备就绪