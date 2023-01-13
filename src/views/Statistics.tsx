import Layout from '../components/Layout';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
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
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value ={category}
                         onChange ={(value)=> setCategory(value)}/>
      </CategoryWrapper>
      {/* 这里使用的是records 数据类型，其中包含了createdAt类型元素--也就是外部的元素 */}
      <div>
        {records.map( (r)=>{
          return(
            <ItemWrapper>
              <div className='tags'>
                 {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
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
    </Layout>
  );
}


export default Statistics;
