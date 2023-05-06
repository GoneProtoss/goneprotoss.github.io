---
layout: post
title:  "我常用的配置文件"
date:   2023-05-06 22:07:00 +0800
categories: 
---

### vim
```bash
syntax on
```

### bash/zsh
```bash
# PS1 相关的玩意儿
autoload -Uz colors && colors
autoload -U add-zsh-hook

PROMPT='%(!.%B%F{red}.%B%F{green}%n@)%m %F{blue}%(!.%1~.%~) %F{blue}%(!.#.$)%k%b%f '

# 一些自定义别名
alias ssh="ssh -o ServerAliveInterval=60"

alias venv_ins="python3 -m venv venv"
alias venv_act=". venv/bin/activate"

# Java 环境变量
# export PATH="/usr/local/opt/openjdk@8/bin:$PATH"
# export JAVA_HOME="/usr/local/opt/openjdk@8"

# Composer 环境变量
export PATH=$PATH:~/.composer/vendor/bin

# 扩大 NodeJS 的内存使用限制
export NODE_OPTIONS=--max-old-space-size=8192

# HomeBrew 环境变量
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"

export PATH="/usr/local/bin":$PATH

# Ruby 环境变量
export PATH="/usr/local/opt/ruby/bin:$PATH"
export PATH="/usr/local/lib/ruby/gems/3.2.0/bin:$PATH"

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```