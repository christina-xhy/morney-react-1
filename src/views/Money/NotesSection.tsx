import styled from "styled-components";

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
export default NotesSection