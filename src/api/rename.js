//rename.js
const fs = require('fs'); //引入node内置的文件系统

function rename() {
  let newName = [];
  fs.readdir('./topic/', (err, oldName) => {
    //读取file文件夹下的文件的名字，oldName是一个数组
    if (err) {
      console.log(err);
    }
    for (let i = 0; i < oldName.length; i++) {
      let name = `topic_coverImg_${i + 16}.png`; // 以图片为例
      newName[i] = name; // 把名字赋给一个新的数组
    }
    for (var i = 0; i < oldName.length; i++) {
      let oldPath = `./topic/${oldName[i]}`; //原本的路径
      let newPath = `./topic/${newName[i]}`; //新路径
      fs.rename(oldPath, newPath, (err) => {
        //重命名
        if (err) {
          console.log(err);
        }
        console.log('done!');
      });
    }
  });
}
rename();
