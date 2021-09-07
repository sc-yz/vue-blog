# 哈哈

## v-if

v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```javascript
// 返回一个node节点，render函数通过表达式的值来决定是否生成DOM
export const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      // ...
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          ) as IfConditionalExpression
        } else {
          // attach this branch's codegen node to the v-if root.
          const parentCondition = getParentCondition(ifNode.codegenNode!)
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          )
        }
      }
    })
  }
)
```

## v-show

v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。

```javascript
// 有transition就执行transition，没有就直接设置display属性
export const vShow: ObjectDirective<VShowElement> = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === 'none' ? '' : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    // ...
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  },
};
```

## 手动实现 v-show

```javascript

<button onClick="model.isShow = true">显示</button>
<button onClick="model.isShow = false">隐藏</button>

<div v-show="isShow">Hello World！</div>

<script>
第 1 步: 定义数据和视图
var model = {
  isShow: false
}
var view = document.querySelector('div')

// 第 2 步: 定义视图刷新方法
var updateView = function(value) {
  view.style.display = value ? '' : 'none'
}

// 第 3 步: 设置初始视图表现
var directiveKey = view.getAttribute('v-show')
updateView(model[directiveKey])

// 第 4 步: 监听数据变化，然后刷新视图，达到数据驱动的目的
Object.defineProperty(model, 'isShow', {
  set: function(val) {
    updateView(val)
  }
}
</script>
```

## v-if && v-show

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
