import Layout from '../components/Layout';
import React, {useEffect, useRef, useState} from 'react';
import CategorySection from './Money/CategorySection';
import {RecordItem, useRecords} from '../hooks/useRecords';
import useTags from '../hooks/useTag';
import styled from 'styled-components';
import day from 'dayjs'
import {ReactNode} from 'react';
import {Echarts} from '../components/echarts';
import _ from 'lodash';
// ccc
const ChartWrapper = styled.div`
    overflow: auto;
  > .chart-bar{
    width:430%;
  }
  &::-webkit-scrollbar{
    display:none;
  }
`

const CategoryWrapper = styled.div`
  background: white;
`
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding:10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
  
`

const Header =styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`


function Statistics() {
  const [category,setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  //getName是useTags组件的数据，类型为 tags: {id: number, name: string}类型
  const selectRecords = records.filter(r => r.category === category)
  const newList = records.filter(r => r.createdAt === createdAt )


  const hash : { [k:string] :RecordItem[] }= {} // {2023-1-14:[item,item],2023-1-14:[item,item],2023-1-14:[item,item]}
  //给这个盒子定义了一个key为标准寻找数据的对象，把数组创建为hash 对象  //
  // 如果没有在里面，那这个元素为【】，最后需要创建每一项的value传入这个对象
  //forEach 没有返回值
  //把相同日期的记录放在同一个hash对象里面，有相同key的不同对象做赛选
  //key不相同则不传数据进去，
  //key相同，则把value传进去
  selectRecords.forEach(r  => {
    const key = day(r.createdAt).format("YYYY-MM-DD")
      if(!(key in hash)){
        hash[key] = []
      }
        hash[key].push(r)
  })
  //先声明一个hash={} ,遍历selectRecords数组， 找到key都相同且对应的对象，传入hash 对象。。。
  //Obj.entries 把对象转为我们需要的数组类型----某些浏览器需要引入这个库(core-js)才可以使用entries
  //['2023-01-14',{tagIds: Array(1), note: '', category: '+', amount: 300, createdAt: '2023-01-13T14:07:23.607Z'}]，
  // ['2023-01-14',{tagIds: Array(1), note: '', category: '+', amount: 300, createdAt: '2023-01-13T14:07:23.607Z'}]
  console.log(Object.entries(hash))
  //判断key的大小 用字符串比较法来排列时间顺序
  const array = Object.entries(hash).sort((a,b)=>{
         if( a[0]  === b[0])  return 0 //日期相同，什么也不做
         if(a[0]  > b[0]) return -1 // -1 最新日期排在前面
         if (a[0] < b[0]) return 1 //1 旧日期
         return 0
  })

  const option={
  tooltip: {
    triggerOn:'click',
    show:true,
    formatter:'{c}',
    position:'top',
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      fontSize: 14,
    },
  },
  grid:{
    left:0,
    right:0,
  },
  xAxis: {
    type: 'category',
    data: [
      '1', '2', '3', '4', '5', '6', '7','8', '9', '10',
      '11', '12', '13', '14', '15', '16', '17','18','19','20',
      '21', '22', '23', '24', '25', '26', '27','28','29','30',
    ],
    axisTick:{
     alignWithLabel:true
    },
    axisLine:{lineStyle:{color:'#666'}}
  },
  yAxis: {
    type: 'value',
    show:false,
  },
  series: [
    {
      // symbol:'circle',
      symbolSize:5,
      itemStyle:{color:'red'},
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
  const keyValueList =() =>{
    const today = new Date();
    const array =[];
    for(let i=0;i <= 29;i++){
      const dateString = day(today).subtract(i,'day').format("YYYY-MM-DD");
      const found = _.find(newList,{createdAt})
      array.push({date:dateString,value:found ? found.amount : 0 })
    }
  }
//设置当前这个元素滚动的距离=滑动距离，则始终展示最右边的数据。
const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    ref.current!.scrollLeft = ref.current!.scrollWidth
  },[])

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value ={category}
                         onChange ={(value)=> setCategory(value)}/>
      </CategoryWrapper>
      {/*展示统计图形 Echarts*/}

      <ChartWrapper ref={ref}>
          <div className='chart-bar'>
            <Echarts option={option}/>
          </div>
      </ChartWrapper>
      {array.map(([date,records]) =>
        <div>
           <Header>
              {date}
           </Header>
           <div>
             {records.map( (r)=>{
               return(
                 <ItemWrapper >
                   <div className='tags oneLine'>
                     {/*实现多个标签之间添加一个，*/}
                     {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                         .reduce((result,span,index,array) =>
                         result.concat(index < array.length -1 ? [span,','] : [span]) ,[] as ReactNode[])
                     }
                     {/*.reduce 为了添加，且末尾也不添加逗号 */}
                   </div>
                   {r.note && <div className='note'>
                     {r.note}
                   </div>}
                   <div className='amount'>
                     ¥{r.amount}
                   </div>
                   {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
                 </ItemWrapper>
               )
             })}
           </div>
      </div>)}
    </Layout>
  );
}


export default Statistics;
