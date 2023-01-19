import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import styled from 'styled-components';

const Wrapper =styled.div`
  > .chartsItem{
    max-width:100%;
    height:400px;
  }
  `

const options = {
    grid:{
      left:0,
      right:0,
    },
    xAxis: {
      type: 'category',
      data: [
        '1', '2', '3', '4', '5', '6', '7','8','9','10',
        '11', '12', '13', '14', '15', '16', '17','18','19','20',
        '21', '22', '23', '24', '25', '26', '27','28','29','30',
      ]
    },
    yAxis: {
      type: 'value',
      show:false,
    },
    tooltip: {
      trigger: "axis",
      show:true,
      axisPointer: {
        type: "shadow",
      },
      textStyle: {
        fontSize: 14,
      },
    },
    series: [
      {
        data: [
          150, 230, 224, 218, 135, 147, 260,
          150, 230, 224, 218, 135, 147, 260,
          150, 230, 224, 218, 135, 147, 260,
          150, 230, 224, 218, 135, 147, 260,
          150, 230
        ],
        type: 'line'
      },
    ],
}
export function Echarts(){
  const [option,setOption] = useState(options)
  const chart = useRef(null)
  const container = useRef(null)
  useEffect(() => {
    const width = document.documentElement.clientWidth
    // @ts-ignore
    container.current.style.width=`${width-20}px`
    // @ts-ignore
    container.current.style.height=`${(width-20)*1.2}px`
    // @ts-ignore
    chart.current = echarts.init(container.current,'dark')
    console.log(container.current);
  }, []);
  useEffect(()=>{
    // @ts-ignore
    chart.current.setOption(option)
  },[option])

  return(
    <Wrapper>
      <div ref={container} className='chartsItem'/>
      <div className='chart'/>
    </Wrapper>
  )
}