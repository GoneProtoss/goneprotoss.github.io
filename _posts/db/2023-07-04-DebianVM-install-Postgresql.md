---
layout: post
title:  "Debian VM 安装 Postgresql"
date:   2023-07-04 21:13:03 +0800
categories: db
---

```bash
jimmy@debian:~$ sudo apt install postgresql
jimmy@debian:~$ sudo systemctl enable postgresql
jimmy@debian:~$ sudo su postgres
postgres@debian:/home/jimmy$ psql
psql (13.3 (Debian 13.3-1))
Type "help" for help.

postgres=# create user jimmy with password 'xxxxxxxx';
postgres=# create database test;
postgres=# grant all privileges on database test to jimmy;



jimmy@debian:~$ sudo su
root@debian:/home/jimmy# vim /etc/postgresql/13/main/postgresql.conf

# - Connection Settings -
# 取消注释 listen_addresses 并把值改成 '*'
listen_addresses = '*' # what IP address(es) to listen on;

root@debian:/home/jimmy# systemctl restart postgresql
```

- 安装完成后打开 VM 和 Host 的通路
![截图]({{site.url}}/assets/db/0.png)

- 但是似乎还是连不上
![截图]({{site.url}}/assets/db/1.png)

```bash
root@debian:/home/jimmy# vim /etc/postgresql/13/main/pg_hba.conf
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             0.0.0.0/0               md5

root@debian:/home/jimmy# systemctl restart postgresql
```

- 然后就好了
![截图]({{site.url}}/assets/db/2.png)
![截图]({{site.url}}/assets/db/3.png)
