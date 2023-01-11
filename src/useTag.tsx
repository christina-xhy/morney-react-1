import {useState} from 'react';
import {createId} from './lib/createId';

//自定义hook 封装成组件
const defaultTags =[
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'},
]
//定义在useTags函数外面，数据则只渲染一次。或者用use其他的hook 包裹
const useTags = ()=>{
  const [tags,setTags] = useState<{id: number,name: string}[]>(defaultTags)
  return {tags,setTags} //必须 对象形式  return出去
}

export default  useTags