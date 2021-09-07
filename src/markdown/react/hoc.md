# 哈哈

## 高阶组件

1. 创建一个函数，名称约定以`with`开头

2. 指定函数参数，参数以大写字母开头（作为要渲染的组件）

3. 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回

4. 在该组件中，渲染参数组件，同时将状态通过 prop 传递给参数组件

5. 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并将其渲染到页面中

```javascript
function withMouse(WrappedComponent) {
  // 该组件提供复用状态逻辑代码
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'waq',
      };
    }
    render() {
      return <WrappedComponent {...state} />;
    }
  }
  return Mouse;
}

// Mouse
```

## 相关阅读

[hoc](https://www.bilibili.com/video/BV14y4y1g7M4?p=64&spm_id_from=pageDriver)
