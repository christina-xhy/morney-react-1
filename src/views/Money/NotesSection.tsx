import styled from "styled-components";
import React, {useState} from 'react';
//value 定义元素「note」非受控组件变为受控组件；
const Wrapper =styled.section`
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
const NotesSection:React.FC = ()=>{
  const [note,setNote]=useState<string>('')
  return(
    <Wrapper>
        <label>
          <span>备注</span>
          <input type='text' placeholder='在这里添加备注' value = {note} onChange={e => setNote(e.target.value)}/>
        </label>
    </Wrapper>
  )
}
//非受控组件的写法
//const refInput = useRef<HTMLInputElement>(null)
// const onBlur = () =>{
//   if(refInput.current !== null){
//     setNote(refInput.current.value)
//   }
// }
// <input type='text' placeholder='在这里添加备注' defaultValue={note} ref = {refInput} onBlur= {onBlur}/>
export default NotesSection