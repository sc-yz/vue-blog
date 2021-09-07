const person = {
  name: 'waq',
  getName: () => {
    console.log(this);
    console.log(this.name);
  },
  getname: function () {
    console.log(this);
  },
};

person.getame();

// 构造函数

// arguments

// 使用 new 操作符
// 箭头函数不能用作构造器，和 new一起用会抛出错误。

// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor
