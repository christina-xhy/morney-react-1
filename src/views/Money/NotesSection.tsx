import styled from "styled-components";
import React, {ChangeEvent, useState} from 'react';
import {Input} from 'components/Input';
import {DatePicker} from 'antd-mobile';
import dayjs from 'dayjs';
//value 定义元素「note」非受控组件变为受控组件；
const Wrapper =styled.section`
  background-color:#f5f5f5;
  padding:28px 16px;
  font-size:14px;
`
type Props = {
  value: string;
  onChange: (value:object) => void
  createdAt:string
}
const NotesSection:React.FC<Props> = (props)=>{
  const note =props.value
  const createdAt = props.createdAt
  const onChange= (e:React.ChangeEvent<HTMLInputElement>,key:string)=>{
    props.onChange({[key]:e.target.value})
  }
  const [visible,setVisible]=useState(false)
  return(
    <Wrapper>
      <Input label = '备注'  type = 'text' value = {note} onChange={(e)=>{onChange(e,'note')}} placeholder='在这里添加备注'></Input>
      {/*<Input label = '日期'  type = 'text' value = {createdAt} onChange={(e)=>{onChange(e,'createdAt')}} placeholder='在这里添加备注'></Input>*/}
    <div onClick={()=>{setVisible(true)}}>
        <div>
          {dayjs(createdAt).format('YYYY-MM-DD')}
        </div>
    </div>
      <DatePicker
        visible={visible}
        onClose={()=>{
          setVisible(false)
        }}
        onConfirm={time=> props.onChange({createdAt:time})}
      />
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