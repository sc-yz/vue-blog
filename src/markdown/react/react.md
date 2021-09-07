# React

## bind(this)

使用 ES6 class 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
```

[react 事件处理](https://zh-hans.reactjs.org/docs/handling-events.html)
[bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
[why-use-bind](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

## react-router

这里需要注意，React Router 不仅支持浏览器，还支持 React Native，以及一些用 Web 实现的移动 App，所以它提供了多个 npm 模块。
代码里看到的 react-router-dom，其实正是支持浏览器的模块。我们在开发运行于浏览器的 Web App 时，只要引入这个包就可以了。
同时，我们也看到了 BrowserRouter、Link、Route、Switch 等组件的用法。接下来我就简单解释一下组件的作用。

1. BrowserRouter：标识用标准的 URL 路径去管理路由，比如 /my-page1 这样的标准 URL 路径。除此之外，还有 MemoryRouter，表示通过内存管理路由，HashRouter，标识通过 hash 管理路由。我们自己实现的例子其实就是用的 hash 来实现路由。
2. Link：定义一个导航链接，点击时可以无刷新地改变页面 URL，从而实现 React Router 控制的导航。
3. Route: 定义一条路由规则，可以指定匹配的路径、要渲染的内容等等。
4. Switch：在默认情况下，所有匹配的 Route 节点都会被展示，但是 Switch 标记可以保证只有第一个匹配到的路由才会被渲染。

## constructor 中的 super

## 为什么 react 的函数组件每次渲染执行两次?

## bind this

handleClick 函数实际上会作为回调函数，传入 addEventListener()
[react-this](https://zhuanlan.zhihu.com/p/37911534)

## 合成事件

SyntheticEvent 包装器。

SyntheticEvent 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。

如果因为某些原因，当你需要使用浏览器的底层事件时，只需要使用 nativeEvent 属性来获取即可。合成事件与浏览器的原生事件不同，也不会直接映射到原生事件。例如，在 onMouseLeave 事件中 event.nativeEvent 将指向 mouseout 事件。每个 SyntheticEvent 对象都包含以下属性：

```md
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

注意：

从 v17 开始，e.persist() 将不再生效，因为 SyntheticEvent 不再放入事件池中。

[合成事件](https://zh-hans.reactjs.org/docs/events.html)

## context

跨组件传递数据

1. 调用 React.createContext() 来创建 Provider（提供数据） 和 Consumer (消费数据)组件

   const {Provider,Comsumer} = React.createContext()

2. 使用 Provider 组件作为父组件

   ```html
   <Provider>
     <div>
       <p></p>
     </div>
   </Provider>
   ```

3. 设置 value 属性，表示需要传递的数据

   ```html
   <Provider value="react">
     <div>
       <p></p>
     </div>
   </Provider>
   ```

4. 使用 consumer 组件来接受数据

```html
<Consumer> {data=>{<span>我是字节点{data}</span>}} </Consumer>
```

## props

1. 默认自带 children 属性
2. props 校验

   - 安装 prop-types
   - 导入 prop-types
   - 组件.propTypes= {}

     ```javascript
     import PropTypes from 'prop-types';
     App.propTypes = {
       color: PropTypes.array,
     };
     ```

3. propType 类型

## 组件的生命周期

只有类组件中存在生命周期

1. 创建阶段
2. 更新阶段
3. 卸载阶段

[https://www.bilibili.com/video/BV14y4y1g7M4?p=59&spm_id_from=pageDriver](https://www.bilibili.com/video/BV14y4y1g7M4?p=59&spm_id_from=pageDriver)

## 高阶组件

HOC(Higher Order-Component)

1. 高阶组件就是一个函数，接受要包装的组件，放回增强后的组件
2. 高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过 props 将复用的状态传递给被包装的组件 WrappedComponent

## 性能优化

[https://zh-hans.reactjs.org/docs/optimizing-performance.html](https://zh-hans.reactjs.org/docs/optimizing-performance.html)

## 相关阅读

[https://www.clearlove666.com/pages/ec64f0/](https://www.clearlove666.com/pages/ec64f0/)
