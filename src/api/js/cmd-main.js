// seajs.config({
//   alias: {
//     jquery: ['http://libs.baidu.com/jquery/2.0.3/jquery', 'js/jquery'],
//   },
// });

define(function (require, exports, module) {
  var test = require('./cmd-test.js');
  console.log(1, 2, 3, test);
});
