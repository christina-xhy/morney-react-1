import Layout from 'components/Layout';
import React from 'react';
import useTags from 'useTag';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {ButtonWrapper} from 'components/Button';
import {CenterWrapper} from 'components/Center';



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

//'/tags/'不要忘记两个/ ，先设置跳转 --再在APP添加router（此处时候创建路由） <Route path ="/tags/：tag">组件名<Route> 也就是新的页面
//56 react不能渲染对象，只能渲染字符串 因此{tag}改为{tag.name}
//42. 在通过id设置路由时就实现了双向绑定。所以tag 通过useParams()hook定义参数 找到上一级目录的数据

function Tags() {
  const {tags,addTag} = useTags()//这个是对象哈希获取元素，注意区分useState本身的写法 【】
  return (
    <Layout>
      <TagList>
        {
          tags.map(tag => {
            return(
              <li key={tag.id}>
                <Link to={'/tags/'+ tag.id}>
                  <span className = 'oneLine'>{tag.name}</span>
                  <Icon name='right'/>
                </Link>
              </li>
          )})
        }
      </TagList>
      <CenterWrapper>
        <ButtonWrapper onClick={addTag}>新增标签</ButtonWrapper>
      </CenterWrapper>
    </Layout>
  );
}

export default Tags;
