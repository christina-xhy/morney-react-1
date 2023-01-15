let arr = [
    {name: "zhangsan", age: 18},
    {name: "lisi", age: 10},
    {name: "wangwu111", age: 20},
    {name: "wangwu1", age: 20},
]


let newArr = arr.sort((pre, next) => {

    if(next.name.length > pre.name.length) return -1;
    if(next.name.length < pre.name.length) return 1;
    if(next.name.length === pre.name.length) return 0;

})

console.log(newArr)