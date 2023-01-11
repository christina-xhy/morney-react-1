
// 函数自定义ID
let id = 0
const createId = ()=>{
  id += 1;
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
