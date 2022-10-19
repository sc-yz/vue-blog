# 格隆汇网站

修改了协议的路径：https://www.gelonghui.com/terms/xxx

在开发人员后台里面编辑。

有一些旧协议访问不了的，找治洲

还有一些没有迁移的，比如 hybird 项目里面的

网站编辑器路径: static/articleCreate
jq 版本，下个版本迭代直接重写吧 😭

# 编辑后台管理系统

项目地址: https://git.gelonghui.com/frontend/web/vue-edit-admin

前人搭的架子，一点一点往上填 💩 山

主要是两个坑，列表组件和编辑器

## 列表组件 @/views/public/my-gird.vue

为了表格 header 显示中文，用的中文作为属性值，以前不懂，懂得时候改不完了，hhhh

可以的话，重写列表组件

## 条件选择组件 @/views/public/filter-form.vue

通过对象数组配置筛选条件

## 基础编辑器 @/views/public/wang-editor.vue

坑：引入了@/utils/wangEditor.js 源代码，后续有新需求建议重写，通过 npm 引入。
其他的在这基础上扩展

坑：使用了 mixins,提交之前检查敏感词，查不到的变量全局搜一下

# mobile-web

这个不算是坑，算注意的点

## 微信打开 App 使用微信开放标签

组件：@/components/public/WxOpenLaunchAppV2
demo：pages/test-demo/to-app

## native 方法

demo: pages/test-demo/native-fun

# 格调研后台管理系统

项目地址：https://git.gelonghui.com/frontend/web/vue3-element-gediao-admin

# 勾股投研 mobile

项目地址：https://git.gelonghui.com/frontend/web/ssr-ts-next-gogu-mobile

# 勾股投研 PC

项目地址：https://git.gelonghui.com/frontend/web/ssr-nuxt-koa-gogu-web

# 开发人员后台管理系统

项目地址：https://git.gelonghui.com/frontend/web/vue-element-develop-admin
