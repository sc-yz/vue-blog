# 哈哈

process.nextTick 方法可以在当前"执行栈"的尾部----下一次 Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。setImmediate 方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次 Event Loop 时执行，

## 数据更新，然后立即操作 dom，发现数据未被更新

```javascript

<p ref="message"> {{message}}</p>

data:{
    message:123
}


methods:{
    changeMessage(){
        this.message = 321;
        // 此时立马通过dom获取message，发现还是123
        console.log(this.$refs.message.textContent)
    }
}

```

## 应用场景

1. 在 created 中获取 dom `this.$refs.xxx`
2. 数据更新后，需要操作 dom

## 代码

[next-tick 源码](https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js)
