---
layout: post
title:  "Jekyll 快速索引"
date:   2023-05-06 21:56:00 +0800
categories: ruby jekyll
---

<h3><a href="http://jekyllcn.com/docs/home/" target="_blank">🔗参考文档</a></h3>

### 安装和初始化

```bash
gem install jekyll
jekyll new your_site_name
cd your_site_name

# 启动本地预览服务
jekyll serve

# 构建
jekyll build
```

### 配置

全局配置在 `_config.yml` 里

### 报错

- 错误

```bash
/usr/local/lib/ruby/site_ruby/3.2.0/rubygems.rb:263:in `find_spec_for_exe': can't find gem bundler (= 2.4.12) with executable bundle (Gem::GemNotFoundException)
```

- 解决方案

```bash
# 删除项目跟目录的 Gemfile.lock
# 重新运行
bundle install

# 如果运行卡住，那就是有道天杀的 Wall，需要修改 Gemfile 首行为
# --> source "https://mirrors.tuna.tsinghua.edu.cn/rubygems/"
```