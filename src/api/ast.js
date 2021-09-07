const recast = require("recast");

const code = `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `;

const ast = recast.parse(code);
const add = ast.program.body[0];
console.log(add);
// 引入变量声明，变量符号，函数声明三种“模具”
const {
  variableDeclaration,
  variableDeclarator,
  functionExpression,
} = recast.types.builders;

ast.program.body[0] = variableDeclaration("const", [
  variableDeclarator(add.id, functionExpression(null, add.params, add.body)),
]);

const output = recast.print(ast).code;
// 美化代码
// const output = recast.prettyPrint(ast, { tabWidth: 2 }).code
// console.log(output);

// recast.print(recast.parse(source)).code === source
