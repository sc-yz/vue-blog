class Polygon {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Polygon {
  constructor(length) {
    // this.height; // ReferenceError，super 需要先被调用！

    // 这里，它调用父类的构造函数的,
    // 作为Polygon 的 height, width
    super(length, length);

    // 注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
    // 忽略这, 这将导致引用错误。

    this.name = 'Square';
  }
  log() {
    console.log(super.sayName());
  }

  //   static log() {
  //     console.log(this.sayName());
  //   }
}

const a = new Square();
console.log(a.log());
