---
layout: post
title:  "Installing pg using homebew on macOS"
date:   2024-02-26 23:13:02 +0800
categories: db
---

### 使用 HomeBrew 在 macOS 下安装 postgresql 后的初始化

```bash
jimmy@JimmyMacBookAir ~ $ createdb
jimmy@JimmyMacBookAir ~ $ psql
psql (14.10 (Homebrew))
Type "help" for help.

jimmy=# CREATE USER postgres WITH password '********';
CREATE ROLE
jimmy=# DROP DATABASE postgres;
DROP DATABASE
jimmy=# CREATE DATABASE postgres owner postgres;
CREATE DATABASE
jimmy=# GRANT ALL PRIVILEGES on DATABASE postgres to postgres;
GRANT
jimmy=# ALTER ROLE postgres CREATEDB;
ALTER ROLE
jimmy=# 
\q
jimmy@JimmyMacBookAir ~ $ psql postgres         
psql (14.10 (Homebrew))
Type "help" for help.

postgres=# 
```