# cluster

它可以通过一个父进程管理一些子进程的方式来实现集群的功能

## 快速上手

```javascript
const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cups().length;

if (cluster.isMaster) {
    for(let i=0;i < numCpus;i++){
        cluster.fork()
    }

    cluster.on("exit",function(worker,code,signal){
        console.log(`woker ${worker.process.pid} died`)
    })
}else{
    http.createServer(function(req,res){
        res.writeHead(200);
        res.end("hellow world")
    }).listen(8000)
}
```

稍微解释下，通过 isMaster 属性，判断是否 Master 进程，是则 fork 子进程，否则启动一个 server。每个 HTTP server 都能监听到同一个端口。

但是在实际项目中，我们的启动代码一般都已经封装在了 app.js 中，要把整块启动逻辑嵌在上面的 if else 中实在不优雅。 所以，我们可以这样：

```javascript
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
 
if (cluster.isMaster) {
    for (var i = 0; i &lt; numCPUs; i++) {
        cluster.fork();
    }
    // 其它代码
    
} else {
    require("./app.js");
}
```

## PM2 实现cluster

使用 pm2 实现 cluster
pm2 是一个现网进程管理的工具，可以做到不间断重启、负载均衡、集群管理等，比 forever 更强大。利用 pm2 可以做到 no code but just config 实现应用的 cluster。

安装 pm2 什么的这里就不赘述了。用 pm2 启动时，通过-i 指定 worker 的数量即可。如果 worker 挂了，pm2 会自动立刻重启，各种简单省心。

```cmd
pm2 start app.js -i 4
```
