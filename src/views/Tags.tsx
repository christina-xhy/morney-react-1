import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTag';

function Tags() {
  const {tags,setTags} = useTags()//这个是对象哈希获取元素，注意区分useState本身的写法 【】


  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

export default Tags;
