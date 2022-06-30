define(function (require, exports, module) {
  console.log('cmd-test1');
  const test2 = require('./cmd-test2.js');
  console.log('cmd-test1-2');
  module.exports = {
    test2,
  };
});
