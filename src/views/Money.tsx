import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import CategorySection from './Money/CategorySection';
import NumberPad from './Money/NumberPadSection';
import NotesSection from './Money/NotesSection';
import TagsSection from './Money/TagsSection';


//自定义组件添加styled，需要props传给<main>标签，再在layout.tsx 组件main上设置className
//并且此处MyLayout包裹
const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

//placeholder : 是一种类型 在input标签显示文字
//clearfix :清除浮动，添加在对应的父元素上
function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <CategorySection/>
      <NumberPad/>
    </MyLayout>
  );
}

export default Money;
