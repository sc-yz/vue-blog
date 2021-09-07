---
title: vue3.0
categories:
tags:
---

## 新建项目

```javascript
1. install vue cli
yarn global add @vue/cli@next
# OR
npm install -g @vue/cli@next

2. 创建一个新项目, 选择 "Manually select features" 选项
vue create  my-vue3-demo

// 如果需要添加ts
3. vue add typescript

4. yarn add typescript
5. 添加tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "typeRoots": ["src/typings/*"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}


```

## 定义组件

```javascript
import { defineComponent } from "vue";

const Component = defineComponent({
  // 已启用类型推断
});
```

## 实例话 APP

## ref reactive 之间的区别

## composition API

## vite

## 显示 webpack 配置

```javascript
vue inspect > output.js
```

## 相关阅读

[composition API](https://composition-api.vuejs.org/zh/#api-%E4%BB%8B%E7%BB%8D)
