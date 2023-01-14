import Layout from '../components/Layout';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import {RecordItem, useRecords} from '../hooks/useRecords';
import useTags from '../hooks/useTag';
import styled from 'styled-components';
import day from 'dayjs'

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



function Statistics() {
  const [category,setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  //getName是useTags组件的数据，类型为 tags: {id: number, name: string}类型
  const selectRecords = records.filter(r => r.category === category)
  const hash : { [k:string] :RecordItem[] }= {} // {2023-1-14:[item,item],2023-1-14:[item,item],2023-1-14:[item,item]}

  selectRecords.map(r  => {
    const key = day(r.createdAt).format("YYYY-MM-DD")
      if(!(key in hash)){
        hash[key] =[]
      }
        hash[key].push(r)
  })
  //先声明一个hash={} ,遍历selectRecords数组， 找到key 对应的对象，传入hash 对象
  //Obj.entries 把对象转为我们需要的数组类型----某些浏览器需要引入这个库(core-js)才可以使用entries
  //['2023-01-14',{tagIds: Array(1), note: '', category: '+', amount: 300, createdAt: '2023-01-13T14:07:23.607Z'}]

  console.log(Object.entries(hash))
  //判断key的大小 用字符串比较法来排列时间顺序
  const array = Object.entries(hash).sort((a,b)=>{
         if( a[0]  === b[0])  return 0
         if(a[0]  > b[0]) return -1
         if (a[0] < b[0]) return 1
         return 0
  })


  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value ={category}
                         onChange ={(value)=> setCategory(value)}/>
      </CategoryWrapper>
      {array.map(([date,records]) =>
        <div>
           <h3>
              {date}
           </h3>
           <div>
             {records.map( (r)=>{
               return(
                 <ItemWrapper >
                   <div className='tags'>
                     {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                   </div>
                   {r.note && <div className='note'>
                     {r.note}
                   </div>}
                   <div className='amount'>
                     ¥{r.amount}
                   </div>
                   {day(r.createdAt).format('YYYY年MM月DD日')}
                 </ItemWrapper>
               )
             })}
           </div>
      </div>)}
    </Layout>
  );
}


export default Statistics;
