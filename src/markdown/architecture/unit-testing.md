# 哈哈

## 测试框架

- Jest
  Jest 是目前最流行的框架之一，是 Facebook 团队构建和维护的 JavaScript 测试框架，基于 Jasmine，至今已经做了大量修改添加了很多特性。

  主要有以下优点：

  开箱即用配置少，API 简单
  支持断言和仿真
  支持快照测试
  在隔离环境下测试
  优雅的测试覆盖率报告
  良好的官网文档

- Mocha
  Mocha 是目前使用最多的 js 测试框架，同时支持前端和后端测试。可以在 node.js 和浏览器中运行，使异步测试变的简单而有趣。Mocha 测试按串行运行，将未捕获的异常映射到正确的测试用例上，从而可以灵活、准确地报告。

  主要优点包括：

  适用于前端和后端
  支持 NodeJS 调试器
  支持任何浏览器
  支持 Object Mock
  社区成熟用的人多，测试各种东西社区都有示例
  但是 mocha 不提供断言，需要引入断言库，断言库可以选择 chai sinon

- Jasmine
  Jasmine 可以模仿用户行为，Jasmine 可用于测试前端的可见性，单击清晰度以及不同分辨率下的 UI 响应速度。 Jasmine 允许通过延迟和等待时间来自动化用户行为，以模拟实际的用户行为。

  主要优点有：

  几乎为 0 的外部依赖，适用于网站、Node.js 项目或任何 JavaScript 可以运行的地方
  开箱即用(支持断言和仿真)，API 简单
  支持前端和后端测试

- AVA
  AVA 是一种极简的轻量级测试框架，它利用了 Javascript 的异步特性，可以并发运行测试。它主要专注于针对基于 NodeJS 的代码运行测试。

  主要优点包括：

  体积小，运行速度快
  异步并发运行测试
  比大多数其他测试框架更快
  简单语法
  干净的堆栈跟踪，使得可以检测到任何潜在的错误

- Tape

  Tape 架构上与 AVA 非常相似，它不支持全局变量，因此需要在每个测试文件中 require Tape。

  主要优点为：

  体积最小，只提供最关键的东西
  只提供最底层的 API，为开发人员编写测试用例提供完全的自由
  支持 ES6，Typescript 和 coffee 脚本标准
  支持大多数现代浏览器上的测试执行