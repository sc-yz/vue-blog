# 安装gitlab

## docker 安装gitlab

前提：安装好docker

<!-- ### 运行gitlab-ee镜像（第一次执行会先下载镜像）


```cmd
sudo docker run --detach --hostname gitlab-server --publish 443:443 --publish 80:80 --publish 22:22 --name gitlab --restart always --volume /srv/gitlab/config:/etc/gitlab --volume /srv/gitlab/logs:/var/log/gitlab --volume /srv/gitlab/data:/var/opt/gitlab gitlab/gitlab-ee:latest

``` -->

### git pull gtilab-ee镜像

`docker pull gitlab/gitlab-ce`

### 运行

```cmd
docker run --detach --hostname 1.117.2.222 --publish 443:443 --publish 80:80  --name gitlab --restart always --volume /opt/gitlab/config:/etc/gitlab --volume /opt/gitlab/logs:/var/log/gitlab --volume /opt/gitlab/data:/var/opt/gitlab 072603e1d1d0
```

## 相关阅读

[https://blog.csdn.net/tlojy/article/details/83785271](https://blog.csdn.net/tlojy/article/details/83785271)
[https://lengxiaobing.github.io/2019/04/22/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAGitLab%E7%8E%AF%E5%A2%83/](https://lengxiaobing.github.io/2019/04/22/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAGitLab%E7%8E%AF%E5%A2%83/)