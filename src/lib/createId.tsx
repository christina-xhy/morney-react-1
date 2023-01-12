
// 函数自定义ID
// 防止每次id    重复回到     初始值之后的id 调用
let id = parseInt(window.localStorage.getItem('idMax') || '0')  //id是number类型， 用时得转为number
const createId = (): number=>{
  id += 1;
  window.localStorage.setItem('idMax',JSON.stringify(id)) // localstorage只接受字符串，渲染时得是字符串
  return id
}


//class 对象封装来自定义ID。可以添加多的vakue
// let id = 0
//
// class Id {
//   value:number;
//   setId(){
//   return this.value + 1000
// }
//   constructor(){
//     id += 1
//     this.value = id
//   }
// }
// export {Id}

//用法 【{id: (new Id).value},name:string] //每new一次就生成一个id

export {createId}
