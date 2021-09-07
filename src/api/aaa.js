const item = [
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]
const a = []

item.forEach((item) => {
  a.push([])
})

for (let i = 0; i < item.length; i++) {
  let k = 0
  for (let j = 0; j < item[i].length; j++) {
    a[k].push(item[i][j])
    k++
  }
}

console.log(111111, a)
