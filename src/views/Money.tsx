import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import CategorySection from './Money/CategorySection';
import NumberPad from './Money/NumberPadSection';
import NotesSection from './Money/NotesSection';
import TagsSection from './Money/TagsSection';
import {useState} from 'react';


//自定义组件添加styled，需要props传给<main>标签，再在layout.tsx 组件main上设置className
//并且此处MyLayout包裹
const MyLayout = styled(Layout)` 
  display:flex;
  flex-direction: column;
`

//placeholder : 是一种类型 在input标签显示文字
//clearfix :清除浮动，添加在对应的父元素上

type Category = '-' | '+'
function Money() {
  const [selected,setSelected] =useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount: 0
  })

    //变量以参数形式传入动态修改，数据类型是obj ,同时需要设置参数类型
    //typeof 是获取值得类型 Partial 是部分类型
  const onChange= (obj : Partial< typeof selected>) =>{
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      <TagsSection  value = {selected.tags}
                    onChange={ (tags) =>onChange({tags})}/>
      <NotesSection value ={selected.note}
                    onChange ={ (note)=> onChange({note})}/>
      <CategorySection value ={selected.category}
                       onChange ={(category)=> onChange({category})}/>
      <NumberPad  value ={selected.amount}
                  onChange ={(amount)=> onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;
