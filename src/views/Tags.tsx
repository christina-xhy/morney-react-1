import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTag';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList =styled.ol`
  font-size:16px;
  > li{
    box-sizing: border-box;
    border-bottom: 1px solid #D5D5D5 ;
    
    
    margin-left: 16px;
    &:hover {
      cursor:pointer;
    }
   > a {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding:12px 16px 12px 0;
   }
  }
`
const ButtonWrapper = styled.button`
  font-size: 18px;
  border:none;
  padding:8px 12px;
  border-radius: 4px;
  background: #f60;
  color:white;
  &:hover{
    cursor:pointer;
  }
`
const Center= styled.div`
display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
//'/tags/'不要忘记两个/ ，先设置跳转 --再在APP添加router（此处时候创建路由） <Route path ="/tags/：tag">组件名<Route> 也就是新的页面
function Tags() {
  const {tags,setTags} = useTags()//这个是对象哈希获取元素，注意区分useState本身的写法 【】
  return (
    <Layout>
      <TagList>
        {
          tags.map(tag => {
            return(
              <li key={tag}>
                <Link to={'/tags/'+ tag}>
                  <span className = 'oneLine'>{tag}</span>
                  <Icon name='right'/>
                </Link>
              </li>
          )})
        }
      </TagList>
      <Center>
        <ButtonWrapper>新增标签</ButtonWrapper>
      </Center>
    </Layout>
  );
}

export default Tags;
