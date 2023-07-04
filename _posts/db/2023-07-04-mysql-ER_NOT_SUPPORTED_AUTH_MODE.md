---
layout: post
title:  "MySQL ER_NOT_SUPPORTED_AUTH_MODE"
date:   2023-07-04 21:13:02 +0800
categories: db
---

具体报错为

```
ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server
```

执行此语句即可

```SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password’;
# password 改成对应的密码
```

原因是使用的 mysql 连接驱动并未完全支持 MySQL 8 的 `caching_sha2_password` 加密方式, 而 `caching_sha2_password` 在MySQL 8中是默认的加密方式

参考文献:
https://www.jianshu.com/p/54b0c02b3810