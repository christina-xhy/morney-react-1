import styled from "styled-components";
import React, {ReactEventHandler, useState} from 'react';

const Wrapper= styled.section`
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
    width:25%;//确定一排5个元素；
    height:64px;//设置元素高度；
    float:left;//错位交叉；父左
    border:none;
    &.ok{
      height:128px;
      float:right;//浮动定位子右；如果爷爷display：flex则孙子浮动了，爸爸不会坍塌。
      //另一个方法是清楚浮动定位clearfix，现在scss设置初始化，然后直接在爸爸后面添加伪元素即可
    }
    &:nth-child(1) {
      background: #E0E0E0;
    }
    &:nth-child(2),
    &:nth-child(5)
    {
      background:#D3D3D3;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9){
      background:#C1C1C1;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(13),
    &:nth-child(10)
    {
      background:#B8B8B8 ;
    } 
      &:nth-child(11),
      &:nth-child(14),
      &:nth-child(8)
      {
        background:#A9A9A9;
      }
    &:nth-child(15)
    {
      background:#B8B8B8;
    }
    &:nth-child(12)
    &:nth-child(16)
    { 
      background:#A9A9A9;
  }
}
`

const NumberPad :React.FC =()=>{
  const [output,_setOutput] = useState<string>('0')
  const setOutput = (output:string)=>{
    if(output.length>16){
    output = output.slice(0,16)
    }else if(output.length === 0){
      output = '0'
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e:React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement) .textContent
    if(text === null){return}
    switch(text){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(output === '0'){
          setOutput(text)
        }else{
          setOutput(output+text)
        }
        break;
      case '00':
        if(text === '00' && output === '0'){
          return
        }else{
          setOutput(output+text)
        }
        break;
      case '.':
        if(output.indexOf('.') >= 0){
          return
        }else{
          setOutput(output+'.')
        }
        break;
      case '删除':

        //
        if(output.length === 1){
          setOutput('')
        }else{
          setOutput(output.slice(0,-1))
        }
        break;
      case '清空':
        setOutput('')
        break;
      case 'Ok':
        break;
    }
  }
  return(
    <Wrapper>
        <div className='output' >
          {output}
        </div>
        <div className='pad clearfix' onClick ={onClickButtonWrapper}>
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
          <button className='ok'>Ok</button>
          <button>0</button>
          <button>00</button>
          <button>.</button>
        </div>
    </Wrapper>
  )
}
export default NumberPad