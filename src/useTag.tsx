import {useState} from 'react';

//自定义hook 封装成组件
const useTags = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  return {tags,setTags} //必须 对象形式  return出去
}

export default  useTags