# Service-worker

Progressive Web App(PWA)

## service-worker in vuecli3.0-vue2

### 脚手架安装的项目添加 pwa

```javascript
// vue.config.js 默认的存在pwa
module.exports = {
  pwa: {
    name: 'xxxxx',
    themeColoe: '$4DBA87',
    msTitleColor: 'red',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode
      swSrc: 'src/service-worker.js',
      //   importWorkboxFrom: 'disabled',
      //   importScripts: 'https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js',
    },
  },
};
```

### 注意点

1. service-worker.js
   本地开发的时候，项目默认会生成 service-worker.js 文件，自定义的 service-worker.js 文件不会生效，如果想在本地测试，修改 service-worker.js 文件名
2. vue.config.js > workboxOptions > importScripts
   importScripts 只在生成环境中生效，build 会在 workboxOptions.swSrc 自动注入 importScripts 值，本地中想要使用，需要在自己的 serviceWorker.js 文件中手动添加

## 相关阅读

[pwa](https://lavas-project.github.io/pwa-book/)
[workbox](https://github.com/GoogleChrome/workbox)
[vuecli3-pwa](https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md)
[vuecli3.0-service-worker-not-effect](https://stackoverflow.com/questions/56074595/vuejs-service-worker-js-is-ignored-in-my-pwa/56075184)
