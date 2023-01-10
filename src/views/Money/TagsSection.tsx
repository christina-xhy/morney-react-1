import styled from 'styled-components';
import React from 'react';
import {useState} from 'react';

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

const TagsSection : React.FC =()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags] = useState<string[]>([])
  const onAddTag = ()=>{
    const tagName = window.prompt("新标签的名称为")
    if(tagName !== null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag : string)=>{
    const index = selectedTags.indexOf(tag)//属性值，元素
    if(index >= 0){
      setSelectedTags(selectedTags.filter( t => t !== tag))
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  }

  const isSelected = (tag: string) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected': ''
  }

  return(
    <Wrapper>
      <ol>
        {tags.map((tag: string) =>
          <li key={tag} onClick={()=>{onToggleTag(tag)}} className={isSelected(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag} >新增标签</button>
    </Wrapper>
  )
}

export default TagsSection
