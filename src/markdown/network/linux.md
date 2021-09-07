# linux

## ssh 免密登录

问：本机免密登录服务器
答：将本地的公钥写入服务器的`authorized_keys`文件中,在mac中使用ssh-copy-id工具发送到服务器

    ```cmd
        ssh-copy-d  root@192.168.0.1
    ```
    然后利用   `ssh root@192.168.0.1`就可以登录服务器了。如果再简便一些，可以在.ssh/config文件中添加
    ```javascript
        Host diyname
            HostName root@192.168.0.1
            Port 12345
            User username
            IdentityFile ~/.ssh/id_rsa
    ```
    接下来就直接使用`ssh diyname`就可以实现免登录了

## XXX
