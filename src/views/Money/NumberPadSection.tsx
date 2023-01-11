
import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/CaculateOutput';

type Props = {
  value:number,
  onChange: (value:number) => void
  onOk?: ()=> void
}
const NumberPad :React.FC<Props>=(props)=>{
  // const [output,_setOutput] = useState<string>('0')
  const output = props.value.toString()
  const setOutput = (output:string)=>{
    let money
    if(output.length>16){
       money = parseFloat(output.slice(0,16))
    }else if(output.length === 0){
       money = 0;
    }else{
       money = parseFloat(output)
    }
    props.onChange(money)
  }
  const onClickButtonWrapper = (e:React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement) .textContent
    if(text === null){return}
    if(text === 'ok'){
     if(props.onOk){props.onOk()}
    }
    if('0123456789.'.split('').concat(['删除','清空']).indexOf(text)>=0){
      setOutput(generateOutput(text,output))
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
          <button className='zero'>0</button>
          <button>.</button>
        </div>
    </Wrapper>
  )
}
export default NumberPad