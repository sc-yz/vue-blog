importScripts("https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js", "/precache-manifest.54869773648570c94609c9d4c2df90fc.js");

// Note: Ignore the error that Glitch raises about workbox being undefined.

// importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/',
});
if (workbox) {
  console.log('Yay! Workbox is loaded');
} else {
  console.log('Boo! Workbox did not load');
}
workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'css-cache',
  })
);
workbox.routing.registerRoute(
  // 缓存JS文件
  /.*\.js/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'js-cache',
  })
);
workbox.routing.registerRoute(
  // 缓存gravatar文件
  new RegExp('https://cdn.v2ex.com/'),
  // 如果缓存可用，请使用它
  workbox.strategies.cacheFirst({
    // 使用自定义缓存名称
    cacheName: 'gravatar-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // 缓存最多30天
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

