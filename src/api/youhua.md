# 哈哈

## 代码优化

### html

1. 避免节点的深层次嵌套
2. 避免 table 布局

### js

1. 优先于类数组而不是类数组对象
2. 实例话对象后避免新加属性和删除属性
3. 更快的访问速度
4. 利用时间委托减少绑定的事件

### 字体

1. unicode-range
2. font-display

## 构建优化

1. 使用 speed-measure-webpack-plugin 查看 loader 和 plugin 耗时
2. 确定 reslove.modules 目录
3. 配置 reslove.extensions
4. thread-loader 开启多进程为 babel 和 typescript
5. terser-webpack-plugin 为 plugin 开启多进程 和缓存
6. cache-loader 把执行后的接口缓存到磁盘中
7. hard-source-webpack-plugin 为 pulgin 提供中间缓存
8. external 外部扩展
9. docker Docker 中使用 Layer Cache 以加快镜像构建. ()

## 传输优化

1. 使用 gzip 压缩
2. 使用 keep-alive 使用 tcp 通道
3. http2 多路复用 头部压缩 二进制分帧 服务器推送
4. 缓存 service-worker + http 缓存
5. 减少重定向
6. 减少 http 请求数量
7. 静态资源使用 cdn

## 渲染优化

1. css js 顺序，利用 async 和 defer
2. 减少重排重绘，利用合成线程

   - 减少 dom 的操作，使用 createDocumentFragment
   - 加上防抖截流
   - 图片写上宽高

3. 按需加载
