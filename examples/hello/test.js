let o ={}
let bValue;
Object.defineProperty(o, "b", {
  get : function(){
    console.log('执行了取操作')
    return bValue;
  },
  set : function(newValue){
    console.log('执行了存操作')
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
});

o.b = 1; // 存

console.log(o.b) // 取
console.log(bValue) // o.b === bValue
