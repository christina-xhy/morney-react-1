import {useState} from 'react';


const useTags = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  return {tags,setTags} //必须对象形式return出去
}
//自定义hook 封装成组件
export default  useTags