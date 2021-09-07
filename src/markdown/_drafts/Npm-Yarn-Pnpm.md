---
title: Npm-Yarn-Pnpm
categories:
tags:
---

## yarn

## NPM 读取 config 配置 顺序

npm 可以从多处读取 npm 的配置信息。不同地方的 npm 配置存在着优先级顺序。

下面从优先级高到低的顺序来介绍一下各配置。

### 环境变量

以 npm*config*为前缀的环境变量会被识别为 npm 的配置属性。如设置 proxy。

npm_config_proxy=http://server:port

### 项目.npmrc 文件

存在于项目根目录下的.npmrc 配置文件/path/to/project/.npmrc。

### 用户.npmrc 文件

存在于用户根目录下的.npmrc 文件。如 windows 下是%USERPROFILE%/.npmrc，MAC 下是$HOME/.npmrc。

### 全局.npmrc 文件

存在于 Node 全局的.npmrc 文件。如 windows 下$PREFIX/etc/.npmrc，MAC 下是%APPDATA%/etc/.npmrc。

### npm 内置的.npmrc 文件

存在于 npm 包的内置.npmrc 文件/path/to/npm/.npmrc。

### npm 的默认配置

npm 本身有默认配置。对于以上情况下都没有设置的配置，npm 会使用默认配置

## 相关阅读

[https://juejin.cn/post/6927086350877343752](https://juejin.cn/post/6927086350877343752)
[https://juejin.cn/post/6917105300084359182](https://juejin.cn/post/6917105300084359182)
[package-lock.json](https://my.oschina.net/u/4291623/blog/3370301)
[lock](https://blog.gplane.win/posts/about-yarn-lock-and-package-lock-json.html)
