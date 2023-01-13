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
            <div>
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              <hr/>
              {r.amount}
              <hr/>
              {day(r.createdAt).format('YYYY年MM月DD日')}
            </div>
          )
        })}
     </div>

    </Layout>
  );
}


export default Statistics;
