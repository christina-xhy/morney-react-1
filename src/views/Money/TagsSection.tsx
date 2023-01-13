import styled from 'styled-components';
import React from 'react';
import useTags from '../../hooks/useTag';
import {createId} from '../../lib/createId';

const Wrapper=styled.section`
  background: #ffffff;
  padding:12px 16px;
  display:flex;
  flex-grow:1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ol{
    margin:0 -12px;
    > li {
      background:#D9D9D9;
      border-radius:18px ;
      display:inline-block;
      padding:3px 18px;
      font-size:14px;
      margin:8px 12px;
      justify-content:space-around;
      &.selected{
        background: pink;
      }
    }
  }
  button{
    background: none;
    border:none;
    padding:2px 4px;
    border-bottom: 1px solid #333;
    color:#666;
    margin-top:8px;
  }
`;
type Props = {
  value : number[];
  onChange:(selected:number[])=> void;
}//定义一个类型，这个类型是父子通信 props传过来的；
const TagsSection : React.FC<Props> =(props)=>{
  const {tags,setTags,addTag} = useTags()
  // const [selectedTagIds,setSelectedTags] = useState<string[]>([])//原本没有存储的数据需要创建selectedTags.
  const selectedTagIds = props.value//获取用户输入的标签元素
  // const onAddTag = ()=>{
  //   const tagName = window.prompt("新标签的名称为")
  //   if(tagName !== null){
  //     setTags([...tags,{id:createId(),name:tagName}])
  //   } 实现同级目录页面之间的 数据同步需要记录到localstorage ，这封装了 addtag


  // }//二、 49 --因为setTags要求的类型是id:number name:string. 所以tagName 的类型也要符合要求，所以添加一个随机的id 和name
  //三、 75--原本类型是id:number name:string，但是name是变量，所以选中元素只保存常量id
  // 因此设置selectedTagIds=props.value 修改value的类型
  //四 58/60行 都是接收的number类型为参数，所以onChange类型也要在Props里面修改为number【】


  //tagId = [四个随机id  且是number 类型]
  const onToggleTag = (tagId : number)=>{
    const index = selectedTagIds.indexOf(tagId)//属性值，获取的我传入的tagId的index索引 IndexOf（sb）
    if(index >= 0){
      //如果 tag 已被选中，就复制所有没有被选中的tag，作为新的 selectedTags[]
      // 自动返回这个数组，选中某个数据然后取消这个数据// ---- 相当于我点击第二次取消这个元素
      props.onChange(selectedTagIds.filter( t => t !== tagId))
    }else{
      props.onChange([...selectedTagIds,tagId]) // 如果没有，则添加进去，新增标签的选中个数//---点击第一次就添加新的标签元素
    }
  }


//一 、72行传入的是tag.id ；number 类型，所以53行需要接受 number类型

  const isSelected = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? 'selected': ''
  }
  // A 72行 isSelected是选中的元素
  //
  return(
    <Wrapper>
      <ol>
        {/**/}
        {tags.map((tag ) =>
          <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={isSelected(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag} >添加标签</button>
    </Wrapper>
  )
}

export default TagsSection




