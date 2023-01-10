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

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type='text' placeholder='在这里添加备注'/>
        </label>
      </NotesSection>
      <CategorySection>
         <ul >
           <li className='selected'>支出</li>
           <li>收入</li>
         </ul>
      </CategorySection>
      <NumberPad>
         <div className='output'>100</div>
         <div className='pad clearfix'>
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>+</button>
           <button>删除</button>
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>-</button>
           <button>清空</button>
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>*</button>
           <button className='ok'>Ok</button>
           <button>0</button>
           <button>.</button>
           <button>%</button>
           <button>/</button>

         </div>
      </NumberPad>
    </MyLayout>
  );
}

export default Money;
