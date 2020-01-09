let str = `
    <div id="app">
      <div>21</div>
      <h1>
        <span>hello</span>
        <span>smile</span>
      </h1>
    <button>按钮&bnsp;&nbsp;&nbsp;</button></div>
`;
var test = '==abc==cc=='
var testPattern = /(?<=[=]{2})(\S+)(?=[=]{2})/g
var testResult = test.match(testPattern)
// 字面量方式
let normalPattern = /span/ig
// 调用正则构造方法
let pattern = new RegExp('span', 'ig')

let numberPattern = /\d/g

let matchCloseTags = /<\/\w+>/g

let matchH = /<h{1}\d{1}>/g

let matchSpan = /<span>(\S|\s)*?<\/span>/g
let matchSpan2 = /<span>(\S|\s)+?<\/span>/g

let matchSpanButton = /<span>|<button>/g
let matchSpanButton2 = /<span>|<button>/g

let matchSpanText = /(<span>)(\S+)+?(<\/span>)/

let matchSpanTextDescribe = /(?<=<span>)(\S+)+?(?=<\/span>)/g

let ignoreEmpty = /&nbsp;+(![\u4e00-\u9fa5])/g

let matchWords = /(?<!\w)(hello)(?!\w)/g

let result = str.match(matchWords)

console.log(result)

// console.log(str.match(matchCloseTags))

// console.log(str.match(numberPattern))

// console.log('匹配结果', result)






