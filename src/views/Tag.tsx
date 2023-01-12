import React from 'react';
import {useParams} from 'react-router-dom';
import useTags from 'useTag';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {ButtonWrapper} from 'components/Button';
import styled from 'styled-components';

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height:20px;
  padding:14px;
  background: white;
`


const Tag: React.FC =(props) =>{
  type Params = {
    id:string
  }//需要定义
  const {findTag} = useTags() //注意不是数组，需要 使用大括号{}
  let { id } = useParams<Params>() //react-router路由属性，获取浏览器地址栏 ----用户输入的数据，但是需要申明类型
  // params才能够获取到id
  const tag = findTag(parseInt(id));
  return(
    <Layout>
      <Topbar>
        <Icon name = 'left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <span>标签名</span>
        <input type='text' placeholder='标签名'/>
      </div>
     <div>
       <ButtonWrapper>删除标签</ButtonWrapper>
     </div>
    </Layout>
  )
}
export {Tag}

