<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-08-17 09:38:47
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-08-17 16:17:52
 * @FilePath: /vue-blog-github/src/markdown/_drafts/MYSQL.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 哈哈


// sudo cat /etc/mysql/debian.cnf 
[client]
host     = localhost
user     = debian-sys-maint
password = KVic5bw3hDWafBi3
socket   = /var/run/mysqld/mysqld.sock
[mysql_upgrade]
host     = localhost
user     = debian-sys-maint
password = KVic5bw3hDWafBi3
socket   = /var/run/mysqld/mysqld.sock


# 遇到的问题
<!-- 2003 - Can't connect to MySQL server on '1.117.2.222' (61 "Connection refused") -->


1. 设置用户密码 https://www.cnblogs.com/williamjie/p/11126486.html  设置的是mysql -u root -p 的密码 94050216



<!-- 1045 - Access denied for user  -->
<!-- 设置的远程登录的密码 设置允许任何主机登陆MySQL -->
2. 
    ```
        用cd /etc/mysql/mysql.conf.d/进入该目录
        用vim mysqld.cnf编辑文件
        [mysqld]
        bind-address = 0.0.0.0  # 表示允许任何主机登陆MySQL
        port=3306               # 表示MySQL运行端口为3306
    ```
<!-- https://blog.csdn.net/kkklebron/article/details/107981720 -->
## 相关阅读

[Ubuntu 按照MySQL](https://www.sjkjc.com/mysql/install-on-ubuntu/)

[远程不允许链接mysql](https://blog.csdn.net/EI__Nino/article/details/25069391)