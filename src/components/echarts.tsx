import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';

export function Echarts(props:any){
  const {option} =props
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
      <div ref={container}/>
  )
}