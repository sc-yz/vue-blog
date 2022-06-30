define(function () {
  'use strict';
  console.log('amd-test-files');
  function add() {
    return [...arguments].reduce((a, b) => a + b);
  }
  return {
    add,
  };

  // console.log('test')
});
