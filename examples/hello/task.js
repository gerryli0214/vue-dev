console.log('开始执行测试代码')
let p = Promise.resolve()
p.then(function () {
  console.log('执行了微任务')
})

setTimeout(function () {
  console.log('执行了宏任务')
})

console.log('执行结束')
