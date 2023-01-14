import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.label`
    display: flex; //flex布局
    align-items: center;
    > span {
      margin-right: 16px; //元素之间的距离
      white-space: nowrap;
    }

    > input {
      background: none;
      border: none;
      height: 44px;
      width: 100%; //输入框100%，会影响另一个元素（span）的距离，设置span的white-space ：nowrap;
      display: block; //盒子的宽度占满当前一行会出现另起一行，则在label 父元素设置display：flex;
  }
`
type Props = {
  label :string;
} & React.InputHTMLAttributes<HTMLInputElement>//继承原本的属性 + 自定义新增label属性 ，展示在span
//input 剩下所以属性全部复制到input 组件 。。。。必须是组件 { ...rest  }
//设置组件时要定义一下 React.FC<Props>
const Input :React.FC<Props> = (props)=>{
  const {label,children,...rest} = props
 return(
    <InputWrapper>
          <span>{props.label}</span>
          <input { ...rest }/>
    </InputWrapper>
 )
}

export {Input}