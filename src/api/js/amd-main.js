// require(['util'], function (util) {});

require.config({
  paths: {
    jquery: ['http://libs.baidu.com/jquery/2.0.3/jquery', 'js/jquery'],
    test: 'amd-test',
  },
});

require(['jquery', 'test'], function ($, test) {
  $(function () {
    alert('test-amd');
  });
  console.log(test.add(1, 2, 3, 4, 5));
  //   test();
});
