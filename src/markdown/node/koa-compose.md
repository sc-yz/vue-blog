# 哈哈


```js

// 最外层中间件，可以用于兜底 Koa 全局错误
app.use(async (ctx, next) => {
  try {
    // console.log('中间件 1 开始执行')
    // 执行下一个中间件
    await next();
    // console.log('中间件 1 执行结束')
  } catch (error) {
    console.log(`[koa error]: ${error.message}`)
  }
});
// 第二层中间件，可以用于日志记录
app.use(async (ctx, next) => {
  // console.log('中间件 2 开始执行')
  const { req } = ctx;
  console.log(`req is ${JSON.stringify(req)}`);
  await next();
  console.log(`res is ${JSON.stringify(ctx.res)}`);
  // console.log('中间件 2 执行结束')
});

use(fn) {
    this.middleware.push(fn);
    return this;
}
// 通过 createServer 方法启动一个 Node.js 服务
listen(...args) {
    const server = http.createServer(this.callback());
    return server.listen(...args);
}

callback() {
    // 从 this.middleware 数组中，组合中间件
    const fn = compose(this.middleware);

    // handleRequest 方法作为 `http` 模块的 `createServer` 方法参数，该方法通过 `createContext` 封装了 `http.createServer` 中的 `request` 和 `response`对象，并将这两个对象放到 ctx 中
    const handleRequest = (req, res) => {
        const ctx = this.createContext(req, res);
        // 将 ctx 和组合后的中间件函数 fn 传递给 this.handleRequest 方法
        return this.handleRequest(ctx, fn);
    };

    return handleRequest;
}
handleRequest(ctx, fnMiddleware) {
    const res = ctx.res;
    res.statusCode = 404;
    const onerror = err => ctx.onerror(err);
    const handleResponse = () => respond(ctx);
    // on-finished npm 包提供的方法，该方法在一个 HTTP 请求 closes，finishes 或者 errors 时执行
    onFinished(res, onerror);
    // 将 ctx 对象传递给中间件函数 fnMiddleware
    return fnMiddleware(ctx).then(handleResponse).catch(onerror);
}


function compose(middleware) {
    // 这里返回的函数，就是上文中的 fnMiddleware
    return function (context, next) {
        let index = -1
        return dispatch(0)

        function dispatch(i) {
        	  // 
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            // 取出第 i 个中间件为 fn
            let fn = middleware[i]
            
            // next 就是下一个中间件
            if (i === middleware.length) fn = next


            // 已经取到了最后一个中间件，直接返回一个 Promise 实例，进行串联
            // 这一步的意义是保证最后一个中间件调用 next 方法时，也不会报错
            if (!fn) return Promise.resolve()

            try {
                // 把 ctx 和 next 方法传入到中间件 fn 中，并将执行结果使用 Promise.resolve 包装
                // 这里可以发现，我们在一个中间件中调用的 next 方法，其实就是dispatch.bind(null, i + 1)，即调用下一个中间件
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
}

```