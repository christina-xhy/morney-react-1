import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';

const options = {
  legend: {
    data: [
      "3-11岁任务数",
      "3-11岁全程接种量",
      "60岁任务数",
      "60岁全程接种量",
      "80岁任务数",
      "80岁全程接种量",
      "完成率",
    ],
  },
  xAxis: {
    type: "category",
    data: ["街道1", "街道2", "街道3", "街道4", "街道5", "街道6", "街道7"],
  },
  yAxis: [
    { type: "value" },
    {
      type: "value",
      name: "%",
      nameTextStyle: {
        color: "#ccc",
        padding: [0, 0, 10, -30],
      },
      splitNumber: 5,
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          width: 1,
          color: ["#ccc", "#ccc"],
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: 12,
        },
      },
    },
  ],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: "#fff",
      align: "left",
      fontSize: 14,
    },
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  series: [
    {
      name: "3-11岁任务数",
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "bar",
    },
    {
      name: "3-11岁全程接种量",
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "bar",
    },
    {
      name: "60岁任务数",
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "bar",
    },
    {
      name: "60岁全程接种量",
      data: [880, 30, 124, 118, 35, 47, 160],
      type: "bar",
    },
    {
      name: "80岁任务数",
      data: [660, 30, 124, 118, 35, 47, 160],
      type: "bar",
    },
    {
      name: "80岁全程接种量",
      data: [880, 30, 124, 118, 35, 47, 160],
      type: "bar",
    },
    {
      name: "完成率",
      data: [50, 130, 124, 18, 35, 47, 160],
      yAxisIndex: 1,
      type: "line",
      smooth: true,
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
    chart.current = echarts.init(container.current,'dark','line')
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