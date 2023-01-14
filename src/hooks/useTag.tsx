import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

//自定义hook 封装成组件
const defaultTags =[
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'},
]
//定义在useTags函数外面，数据则只渲染一次。或者用use其他的hook 包裹

//19行 getItem 刷新后获取页面local storage 的值 ，注意需要JSON.parse


// localstorage 持久化defaultTags
//在get时做判断，并设置初始值
const useTags = ()=>{
  const [tags,setTags] = useState<{id: number,name: string}[]>(defaultTags)
  //下次更新希望去localstorage获取数据
  useEffect(()=>{
   let localTags = JSON.parse(    window.localStorage.getItem('tags') || '[]')//[]为保底，不为undefined
    if(localTags.length === 0 ){
      localTags = [
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'},
      ]
    }
    setTags(localTags)
  },[])
  //after mount 第一次挂载就获取，渲染 也就是udefine 变为【】
//组件挂在时渲染，每次刷新一次时渲染。此时localstorage 数据持久化



  //想要在这个初始数据【】数组中添加新的数据，并且记录，此时需要stringify
  //useUpdate 封装了，解决setItem时 每次页面刷新都会出现从undefined变为【】的这个bug。
  //useRef 获取当前元素 count.current 自增 1 ，跳过【】
  //再setItem
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags));//这里必须变为string ，不能用tostring
  },tags) // 这里必须是不可变数据，不能修改tags。   所以每次修改只能是新的tags


  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];//【0】返回新数组的第一个元素
  //数组的第0项是vale=string 也就是ID属性值
  // 因为接受的参数类型 id:number 必须是number，且接受的是一个number ，所以[0] 最后返回findTag

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
  const addTag = ()=>{
    const tagName = window.prompt("新标签的名称为")
    if(tagName !== null && tagName !== ''){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }

  const getName = (id:number)=>{
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : '';
  }
  //类型是ID和Name 那个数据
  return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag,getName} //必须 对象形式  return出去
}

export default  useTags