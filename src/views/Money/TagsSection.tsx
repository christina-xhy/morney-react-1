import styled from 'styled-components';
import React from 'react';
import useTags from '../../useTag';

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
}//定义一个类型，这个类型是父传子通信传过来的
const TagsSection : React.FC<Props> =(props)=>{
  const {tags,setTags} = useTags()
  // const [selectedTagIds,setSelectedTags] = useState<string[]>([])//原本没有存储的数据需要创建selectedTags.
  const selectedTagIds = props.value//获取用户输入的标签元素
  const onAddTag = ()=>{
    const tagName = window.prompt("新标签的名称为")
    if(tagName !== null){
      setTags([...tags,{id:Math.random(),name:tagName}])
    }
  }//二、 49 --因为setTags要求的类型是id:number name:string. 所以tagName 的类型也要符合要求，所以添加一个随机的id 和name
  //三、 54 --原本类型是id:number name:string，但是name是变量，所以选中元素只保存常量id
  // 因此设置selectedTagIds=props.value 修改value的类型
  //四 58/60行 都是接收的number类型为参数，所以onChange类型也要在Props里面修改为number【】
  const onToggleTag = (tagId : number)=>{
    const index = selectedTagIds.indexOf(tagId)//属性值，元素
    if(index >= 0){
      props.onChange(selectedTagIds.filter( t => t !== tagId))
    }else{
      props.onChange([...selectedTagIds,tagId])
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
        {tags.map((tag ) =>
          <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={isSelected(tag.id)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag} >新增标签</button>
    </Wrapper>
  )
}

export default TagsSection
