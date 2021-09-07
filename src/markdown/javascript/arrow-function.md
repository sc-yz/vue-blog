# 哈哈

## 没有 this

## 不能使用箭头函数的情况

1. 定义对象方法

   ```js
   const person = {
     name: 'waq',
     getName: () => {
       console.log(this.name);
     },
   };

   const name = person.getName(); //  undefined, this === Window
   ```

2. 构造函数

   ```js
   const Person = (name) => {
     return this.name;
   };
   const man = new Person('waq');
   ```

3. 原型上方法

4. 事件回调函数

   ```js
   var btn = document.getElementById('btn');
   btn.addEventListener('click', () => {
     console.log(this, window);
     this.innerhtml = 'click btn';
   });
   ```
