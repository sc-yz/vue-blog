# github-action

GitHub Actions 是 GitHub 的持续集成服务。

## 创建一个 Github Pages 站点

任何一个公开的（私有的不行） github 仓库都可以生成 Github Pages 页面。

我们尝试一下，在 github 上新建一个公开的仓库,并新建一个 index.html 文件，仓库默认以`index.html`文件作为访问的入口，您可以在`Settings`的`pages`选择一个分支作为来源，选中之后，github 会将你当前的仓库部署到`http://xxxx(用户名).github.io/xxxxx(仓库名)`,soucrce 默认为 none ，不会部署项目。

1. 默认 Github Pages 是 disabled 状态，因为没有选中任何 source
   ![disabled](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/github-action-setting-source-none.png)
2. 当我们选中 main 分支，github 会把 main 分支作为 source 部署到 `http://xxxx(用户名).github.io/xxxxx(仓库名)`，此时处于 ready 状态
   ![ready](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/github-action-setting-source-main.png)
3. 稍等片刻，如下图所示，页面成功部署在`http://xxxx(用户名).github.io/xxxxx(仓库名)`，点击可以查看
   ![success](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/github-action-setting-source-main-success.png)

## 利用 github-action 将项目自动更新到 Github Pages

提问：每次 git push 到 github 仓库，github 不会主动帮你更新到 github pages,那要怎么做呢？
回答： github action

对于 github action，可以看看阮一峰老师的[github action](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html),这篇文章讲的很详细了。

总结就是两个步骤：

1. 在 仓库的 action 中，创建 workflow，在本地 git pull 下来，根据自己的情况修改 workflow 文件。
2. 生成 GitHub 密钥。按照[官方文档](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)，生成一个密钥。然后，将这个密钥储存到当前仓库的 Settings/Secrets 里面,这个密钥在 workflow 重的`.yml`文件中会使用到。

```yml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false
      - name: Install and Build
        run: |
          npm install
          npm run build
           cp dist/index.html dist/404.html
      - name: Deploy
        ## JamesIves/github-pages-deploy-action@releases/v3  第三方的插件
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.DEPLOY_KEY }}
          # REPOSITORY_NAME: sc-yz/sc-yz.github.io
          BRANCH: gh-pages-test
          FOLDER: dist
```

## 利用 github-action 将项目更新到服务器

### 更新到服务器的静态目录

### 更新到 docker 版本

## 相关阅读

[ruanyifeng-getting-started-with-github-actions](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
[github-page](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Using_Github_pages)
