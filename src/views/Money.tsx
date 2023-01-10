import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection =styled.section`
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

const CategorySection=styled.section`
 ul{
   display:flex;
   background:lightskyblue;
   font-size: 24px;
  >li{
    width:50%;
    text-align:center;
    padding:16px 0 ;
    position:relative;//夫相子绝；
    &.selected::after{
      content:'';
      display:block;//变为block元素
      height:3px;//不需要border，盒子变为实心的线条；
      background:indigo;
      position:absolute;//设置了绝对定位后，元素会消失，需要加width：100%
      bottom:0;//确定绝对定位的位置
      width:100%;//显示出元素；
      left:0;//防止bug出现
    }
  }
}
`

const NumberPad = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size:36px;
    line-height:72px;
    text-align:right;//字体靠最右边；
    padding:0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25)， //设置盒子内部的阴影,并且只有盒子下面有；
                inset 0 5px 5px -5px rgba(0,0,0,0.25); //设置盒子内部的阴影,并且盒子上面有；
  },
  > .pad{
  >button{
    width:20%;//确定一排5个元素；
    height:64px;//设置元素高度；
    float:left;//错位交叉；父左
    border:none;
    &.ok{
      height:128px;
      float:right;//浮动定位子右；如果爷爷display：flex则孙子浮动了，爸爸不会坍塌。
      //另一个方法是清楚浮动定位clearfix，现在scss设置初始化，然后直接在爸爸后面添加伪元素即可
    }
    &:nth-child(2),
    &:nth-child(6){
      background: #E0E0E0;
    }
    &:nth-child(3),
    &:nth-child(7),
    &:nth-child(11)
    {
      background:#D3D3D3;
    }
    &:nth-child(4),
    &:nth-child(8),
    &:nth-child(12),
    &:nth-child(16){
      background:#C1C1C1;
    }
    &:nth-child(5),
    &:nth-child(9),
    &:nth-child(13),
    &:nth-child(17)
    {
      background:#B8B8B8 ;
    } 
      &:nth-child(10),
      &:nth-child(14),
      &:nth-child(18)
      {
        background:#A9A9A9;
      }
   
    &:nth-child(19)
    {
      background:#B8B8B8;
    }
    &:nth-child(20),
    &:nth-child(15)
    {
      background:#9A9A9A;
  }
}
`
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
