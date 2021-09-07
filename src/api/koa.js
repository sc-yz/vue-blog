const Koa = require("koa")

const app = new Koa()
const PORT = 8000

// #1
app.use(async (ctx, next) => {
  console.log(1, "start")
  next()
  console.log(1, "end")
})
// #2
app.use(async (ctx, next) => {
  console.log(2, "start")
  next()
  console.log(2, "end")
})

app.use(async (ctx, next) => {
  console.log(3)
})

app.listen(PORT)
console.log(`http://localhost:${PORT}`)
