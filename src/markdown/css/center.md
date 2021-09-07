# 哈哈

```html
<div>
  <div class="wp">
    <div class="box fixed-size">text</div>
  </div>
</div>

<style>
  .wp {
    border: 1px solid red;
    width: 300px;
    height: 300px;
  }
  .box {
    background: green;
  }
  .fixed-size {
    width: 100px;
    height: 100px;
  }
</style>
```

## 元素居中定宽高

1. absolute + 负 margin

   ```css
   .wp {
     position: asbolute;
   }
   .box {
     position: absolute;
     top: 50%;
     left: 50%;
     margin-left: -50px;
     margin-top: -50px;
   }
   ```

2. absolute + margin auto

   ```css
   .wp {
     position: relative;
   }

   .box {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     margin: auto;
   }
   ```

3. absolute + calc

   ```css
   .wp {
     position: relative;
   }
   .box {
     position: absolute;
     top: calc(50% -50px);
     left: calc(50% - 50px);
   }
   ```

## 居中元素不定宽高

1. absolute + transform

   ```css
   .wp {
     position: relative;
   }
   .box {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   ```

2. css-table

   ````css
   .wp{
       display:table-cell;
       text-align:center;
       vertical-align:middle;
   }
   .box{
       display:inline-block
   }
       ```
   ````

3. flex

   flex 是非常现代的布局方案

   ```css
   .wp {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```

4. grid

   grid 布局非常超前，虽然兼容性不好，但是能力超强

   ```css
   .wp {
     display: grid;
   }
   .box {
     align-self: center;
     justify-self: center;
   }
   ```

## 总结

1. PC 端有兼容性要求，宽高固定，推荐使用 absolute + 负 margin
2. PC 端有兼容性要求，宽高不固定，推荐使用 css-table
3. PC 端无兼容性要求，推荐使用 flex
4. 移动端推荐使用 flex
