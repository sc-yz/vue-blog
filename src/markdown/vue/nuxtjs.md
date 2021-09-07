# nuxt 服务端渲染的 vue 框架

本地记录在开发过程中的一些问题

## nuxt.config.js

```javascript
module.exports = {
  head: {
    title: 'xx',
    meta: [],
    link: [],
  },
  // 全局的css
  css: ['xxx', 'xxx'],
  // loading 样式
  loading: {
    color: '#000',
  },
  // 自动导入组件
  components: true,
  plugins: [],
};
```

## modules

```javascript
 modules: [
    [
      '@nuxtjs/proxy',
      {
        secure: false,
        proxyTimeout: 20000,
        timeout: 20000,
        cookieDomainRewrite: {
          '*': '', // 用于登录接口代理的 set-cookie domain改成当前host 避免不生效
        },
      },
    ],
    '@nuxtjs/axios', // axios
    '@nuxtjs/sentry', // sentry
    'nuxt-ssr-cache',
    [
      'nuxt-lazy-load', // 添加图片懒加载
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: true,
        // Default image must be in the static folder
        defaultImage: '/images/default-image.jpg',
        // To remove class set value to false
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',

        observerConfig: {
          // See IntersectionObserver documentation
        },
      },
    ],
  ],
  // 添加sentry模块
  sentry: {
    dsn: 'xxxx',
    publishRelease: true,
    enabled: process.env.NODE_ENV === 'production',
    sourceMapStyle: 'nosources-source-map', // 设置 sourcem-ap类型，默认是(source-map),不设置的话，会覆盖默认的nuxt的source-map类型
    config: {
      enabled: process.env.NODE_ENV === 'production',
      environment: process.env.NODE_ENV,
      disableServerSide: true,
      release: Date.now() + '',
      ignoreErrors: [/^chrome.loadTimes$/],
      debug: process.env.NODE_ENV !== 'production',
      org: 'sentry',
      dsn: 'xxx',
    },
  },
```
