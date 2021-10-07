<!--
 * @Author: kian
 * @Date: 2021-07-18 23:43:04
 * @LastEditors: kian
 * @LastEditTime: 2021-10-07 08:50:29
 * @Description:
-->

# 哈哈

## 继承和成员修饰符

无论是 es 中还是 ts 中，类成员的属性都是实例属性，不是原型属性，类成员的方法都是原型上的方法
实例的属性必须具有初始值（在构造函数初始化）

### 继承 extends

### 成员修饰符

    ```ts
    class Dog {
        //类不能被实例化、也不能被继承
        private constructor(public color:string){//color变成实例属性
        }
        name:string // 实例化对象的属性
        run(){} // 挂在在Dog.prototype 上
        //public:公有，默认，对所有可见
        public name:string
        //private:私有，类本身访问，不能被类的实例/子类访问
        private pri(){}
        //protected:受保护成员，只能在类和子类访问，不能被实例访问
        protected pro(){}
        //只读属性，不可被更改，要赋初始值
        readonly legs:number = 4
        //静态成员:只能通过类名来调用，不能通过实例调用，可以被子类继承
        static food:string = 'bones'
    }
    ```

## 抽象类与多态

### abstract

    重点： 只能继承，不能实例化，

    ```ts
        abstract class Animal {
            // 具体的实现
            eat(){
                console.log('eat')
            }
            // 明知道的方法，就不需要在子类实现了，
            // 不指定方法的具体实现，就是抽象方法
            // 抽离出共性
            abstract sleep():viod
        }
    ```

### 多态

### this 链式调用

类的成员方法返回 this,方便链式调用

    ```ts
    class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
    }

    // new WorkFlow().step1().step2()

    class myFlow extends WorkFLow {
        next(){
            return this
        }
    }
        // new myFlow().next().step1().next().step2()
    ```

## 类和接口

一般来讲，一个类只能继承自另一个类。
有时候不同类之间可以有一些共同的特性，这个时候就可以把特性提取成接口(interface),用 implements 关键字来实现，这个特性大大提高了面向对象的灵活性

### implememnts（实现） 类实现接口

        ```ts
        interface Tea{
            tisheng():viod
        }
        interface Milk {
            drink():viod
        }

        class MilkTea implements Tea,Milk {
            tisheng(){}
            drink(){}

        }
        ```

## 接口继承接口

    ```ts
        interface Animal {
            live():viod
        }
        interface Dog extends Animal {
            speak():viod
        }
    ```

## 接口继承类

常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中确是可以的

## 类型别名

    Type 类型别名用来给一个类型起个新名字。

    ```ts
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
    }
    ```
    上例中，我们使用 type 创建类型别名。

    类型别名常用于联合类型。

## declare

对第三方模块的申明
