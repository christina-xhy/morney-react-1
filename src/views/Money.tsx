import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection =styled.section`
  background: #ffffff;
  padding:0 16px;
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

const NotesSection =styled.section`
  background-color:#f5f5f5;
  padding:10px 16px;
  font-size:14px;
  > label{
    display:flex; //flex布局
    align-items:center;
    > span{
      margin-right:16px;//元素之间的距离
      white-space: nowrap;
    }
    >input{
      background: none;
      border:none;
      height:72px;
      width:100%;//输入框100%，会影响另一个元素（span）的距离，设置span的white-space ：nowrap;
      display:block;//盒子的宽度占满当前一行会出现另起一行，则在label 父元素设置display：flex;
    }
  }
`

const CategorySection=styled.section``

const NumberPad = styled.section``

function Money() {
  return (
    <Layout>
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
        <li>支出</li>
        <li>收入</li>
      </CategorySection>
      <NumberPad>
         <div>100</div>
         <div>
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>删除</button>
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>清空</button>
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>0</button>
           <button>.</button>
         </div>
      </NumberPad>
    </Layout>
  );
}

export default Money;
