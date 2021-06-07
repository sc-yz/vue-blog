(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b21a7"],{"234d":function(e,o,c){"use strict";c.r(o);var r=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,o=e.$createElement,c=e._self._c||o;return c("section",[c("h1",[e._v("缓存")]),c("h2",[e._v("什么是缓存，为什么需要用缓存")]),c("p",[e._v("缓存就是数据交换的缓冲区（称作 Cache），是存贮数据（使用频繁的数据）的临时地方。当用户查询数据，首先在缓存中寻找，如果找到了则直接执行。如果找不到，则去数据库中查找。")]),c("p",[e._v("缓存的本质就是用空间换时间，牺牲数据的实时性，以服务器内存中的数据暂时代替从数据库读取最新的数据，减少数据库 IO，减轻服务器压力，减少网络延迟，加快页面打开速度。")]),c("h2",[e._v("哪些缓存")]),c("p",[e._v("浏览器缓存：浏览器缓存根据一套与服务器约定的规则进行工作，在同一个会话过程中会检查一次并确定缓存的副本足够新。如果在浏览过程中前进或后退时访问到同一个图片，这些图片可以从浏览器缓存中调出而即时显示。")]),c("p",[e._v("数据库缓存：常用的缓存方案有 memcached、redis 等。把经常需要从数据库查询的数据、或经常更新的数据放入到缓存中，这样下次查询时，直接从缓存直接返回，减轻数据库压力，提升数据库性能。")]),c("p",[e._v("Web 应用层缓存:应用层缓存指的是从代码层面上，通过代码逻辑和缓存策略，实现对数据、页面、图片等资源的缓存，可以根据实际情况选择将数据存在文件系统或者内存中，减少数据库查询或者读写瓶颈，提高响应效率。")]),c("p",[e._v("服务器缓存：包括代理服务器缓存和 CDN 缓存。 代理服务器缓存：代理服务器是浏览器和源服务器之间的中间服务器，浏览器先向这个中间服务器发起 Web 请求，经过处理后(比如权限验证，缓存匹配等)，再将请求转发到源服务器。 代理服务器缓存的运作原理跟浏览器的运作原理差不多，只是规模更大。可以把它理解为一个共享缓存，不只为一个用户服务，一般为大量用户提供服务，因此在减少响应时间和带宽使用方面很有效，同一个副本会被重用多次。")]),c("p",[e._v("CDN 缓存：也叫网关缓存、反向代理缓存。CDN 缓存一般是由网站管理员自己部署，为了让他们的网站更容易扩展并获得更好的性能。 浏览器先向 CDN 网关发起 Web 请求，网关服务器后面对应着一台或多台负载均衡源服务器，会根据它们的负载请求，动态将请求转发到合适的源服务器上。 虽然这种架构负载均衡源服务器之间的缓存没法共享，但却拥有更好的处扩展性。从浏览器角度来看，整个 CDN 就是一个源服务器。")]),c("h2",[e._v("强缓存（本地缓存）")]),c("p",[c("code",{pre:!0},[e._v("http1.0")]),e._v(":")]),c("p",[e._v("expires: 值为相对时间，相对服务器时间，不同地区服务器时间不一致，会出错")]),c("p",[c("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires"}},[e._v("MDN-Expires")])]),c("p",[c("code",{pre:!0},[e._v("http1.1")]),e._v(":")]),c("p",[e._v("cache-control:public,max-age=1234567890 ，时间为时间戳(秒)，相对第一次加载的时间。")]),c("p",[c("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control"}},[e._v("MDN-Cache-Control")])]),c("h2",[e._v("弱缓存（协商缓存）")]),c("p",[c("code",{pre:!0},[e._v("http1.0")]),e._v(":")]),c("p",[e._v("modified: 文件被修改的时间，精确到秒 if-modified-since：如果请求时，response 中 header 上存在 modified，则第二次请求的时候会带上 if-modified-since，如果服务器文件的修改的时间大于 if-modified-since 的值，则会返回新的文件，否则告诉浏览器去缓存里面获取 "),c("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag"}},[e._v("MDN-Modified-if-modified-since")])]),c("p",[c("code",{pre:!0},[e._v("http1.1")]),e._v(":")]),c("p",[e._v('etag:"33a64df551425fcc55e4d42a148795d9f25f89d4" // 一串字符串 if-none-match: 如果第一个请求，response 的 header 上存在 etag,则第二次请求时，会带上 if-none-match，值为 etag 的值，如果服务器文件的 etag 和 if-none-match 值是否一致，一致返回最新的文件，否则告诉浏览器去缓存里面获取 '),c("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag"}},[e._v("MDN-ETag-if-none-match")])]),c("h2",[e._v("强缓存和弱缓存")]),c("p",[e._v("expires 和 cache-control 同时存在时，cache-control 优先级更高，expires 可以兼容一些旧")]),c("h2",[e._v("chrome firefox 304")]),c("p",[e._v("本地缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程")]),c("p",[e._v("304: 当服务器判断 if-modifined-since 和 if-none-match")]),c("p",[e._v("firefox 都是 304 chrome 直接获取缓存里面的")]),c("h2",[e._v("缓存的位置")]),c("p",[e._v("浏览器可以在内存、硬盘中开辟一个空间用于保存请求资源副本。我们经常调试时在 DevTools Network 里看到 Memory Cache（內存缓存）和 Disk Cache（硬盘缓存），指的就是缓存所在的位置。请求一个资源时，会按照优先级（Service Worker -> Memory Cache -> Disk Cache -> Push Cache）依次查找缓存，如果命中则使用缓存，否则发起请求。这里先介绍 Memory Cache 和 Disk Cache。")]),c("p",[c("code",{pre:!0},[e._v("200 from memory cache")]),e._v(" 表示不访问服务器，直接从内存中读取缓存。因为缓存的资源保存在内存中，所以读取速度较快，但是关闭进程后，缓存资源也会随之销毁，一般来说，系统不会给内存分配较大的容量，因此内存缓存一般用于存储较小文件。同时内存缓存在有时效性要求的场景下也很有用（比如浏览器的隐私模式）。")]),c("p",[c("code",{pre:!0},[e._v("200 from disk cache")]),e._v(" 表示不访问服务器，直接从硬盘中读取缓存。与内存相比，硬盘的读取速度相对较慢，但硬盘缓存持续的时间更长，关闭进程之后，缓存的资源仍然存在。由于硬盘的容量较大，因此一般用于存储大文件。")]),c("p",[c("code",{pre:!0},[e._v("200 from prefetch cache")]),e._v(" 在 preload 或 prefetch 的资源加载时，两者也是均存储在 http cache，当资源加载完成后，如果资源是可以被缓存的，那么其被存储在 http cache 中等待后续使用；如果资源不可被缓存，那么其在被使用前均存储在 memory cache。")]),c("p",[c("code",{pre:!0},[e._v("CDN Cache")]),e._v(" 以腾讯 CDN 为例：X-Cache-Lookup:Hit From MemCache 表示命中 CDN 节点的内存；X-Cache-Lookup:Hit From Disktank 表示命中 CDN 节点的磁盘；X-Cache-Lookup:Hit From Upstream 表示没有命中 CDN。")]),c("h2",[e._v("用户行为对浏览器缓存的控制")]),c("p",[e._v("地址栏访问，链接跳转是正常用户行为，将会触发浏览器缓存机制； F5 刷新，浏览器会设置 max-age=0，跳过强缓存判断，会进行协商缓存判断； ctrl+F5 刷新，跳过强缓存和协商缓存，直接从服务器拉取资源。")]),c("h2",[e._v("其他缓存")]),c("h3",[e._v("IndexDB")]),c("h2",[e._v("Service Worker")]),c("h2",[e._v("localStorage")]),c("h2",[e._v("sessionStorage")]),c("h2",[e._v("相关阅读")]),c("p",[c("a",{attrs:{href:"https://www.jiqizhixin.com/articles/2020-07-24-12"}},[e._v("缓存")]),c("a",{attrs:{href:"https://www.jianshu.com/p/54cc04190252"}},[e._v("缓存")])])])}],h=c("2877"),t={},p=Object(h["a"])(t,r,a,!1,null,null,null);o["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0b21a7.4ce186a5.js.map