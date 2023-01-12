import {useState} from 'react';
import {createId} from './lib/createId';
import classnames from 'classnames'

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
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];//数组的第0项是vale=string

  const findTagIndex = ( id: number ) => {
    let result = -1;
    for (let i = 0;i <= tags.length ;i++){
      if((tags[i].id === id)){
        result  = i
        break;
      }
    }
  }
  const updateTag = (id:number,obj:{name:string}) =>{
  setTags(tags.map(tag => tag.id === id ? {id,name: obj.name} : tag));
  }
  //一 、得到最新的tags---深拷贝方式
  // const updateTag = (id:number,obj:{name:string}) =>{
  //   const index = findTagIndex(id)
  //   const tagsClone = JSON.parse(JSON.stringify(tags))//深拷贝tags  // 转为字符串，再转为json对象
  //   // const newTags = tagClone.splice(index,1,{id:id,name:obj.name}) // 删除其中选中的一个，传出删除的对象
  //   tagsClone.splice(index,1,{id:id , name:obj.name});
  //   setTags(tagsClone)//更新数据，实现修改原本的标签的，找相同 修改旧的为新的目的
  // }
const deleteTag = ( id:number ) =>{
    setTags(tags.filter(tag => tag.id !== id))
}//父子通信二
//找到不是选中的那个，返回出来

  //二 、删除这个标签
  // const deleteTag = (id:number) =>{
  //   const index = findTagIndex(id)
  //   const tagsClone = JSON.parse(JSON.stringify(tags))
  //   tagsClone.splice(index,1)
  //   setTags(tagsClone)
  // }



  return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag} //必须 对象形式  return出去
}

export default  useTags