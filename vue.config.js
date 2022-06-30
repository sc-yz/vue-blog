const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  publicPath: '',
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({ raw: true });
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './src/sw.js'),
            to: path.resolve(__dirname, './dist'),
          },
        ],
      }),
      new VueAutoRoutingPlugin({
        // Path to the directory that contains your page components.
        pages: 'src/pages',

        // A string that will be added to importing component path (default @/pages/).
        importPrefix: '@/pages/',
      }),
    ],
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        target: 'https://test.gelonghui.com',
        changeOrigin: true,
      },
    },
  },
  pwa: {
    name: 'vue-blog',
    themeColoe: '$4DBA87',
    msTitleColor: 'red',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode
      swSrc: 'src/sw.js',
      importWorkboxFrom: 'disabled',
      importScripts: 'https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js',
    },
  },
};
