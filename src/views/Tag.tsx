import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import useTags from 'hooks/useTag';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {ButtonWrapper} from 'components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {CenterWrapper} from '../components/Center';
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height:20px;
  padding:14px;
  background: white;
`

const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`


const Tag: React.FC =() =>{
  type Params = {
    id:string
  }//需要定义  //31  params才能够获取到id ， 但是需要申明类型且必须是string
  const {findTag,updateTag,deleteTag} = useTags() //注意不是数组，需要 使用大括号{}
  let { id :idString} = useParams<Params>() //react-router路由属性，通过（外部的：id）在浏览器地址栏获取数据
  // ----用户输入的数据
  // id:idString重命名id


  //tag 是和初始值一样的数据类型
  //string转为数字number,作为参数给findTag
  //用idString为参数选中去filter相同的元素 从而进行修改 和 更新
  const tag = findTag(parseInt(idString));

  //这里用（）包裹了一个div，先定义，得到了tag元素后仔执行。62行执行调用了代码
  const tagContent = (tag :{id:number;name:string}) => (
   <div>
     <InputWrapper>
       <Input type = 'text' placeholder='标签名' label = '新增标签'
              value={tag.name}
              onChange={ (e) => {
                updateTag(tag.id,{name:e.target.value})
              }}
       />
     </InputWrapper>
     <CenterWrapper>
       <ButtonWrapper onClick={()=> deleteTag(tag.id)}>删除标签</ButtonWrapper>
     </CenterWrapper>
   </div>
  )

  //返回上一级目录，tags 直接绑定在Icon -svg上，需要重新定义扩大Icon的属性，也使用了classnames组件添加多个classname
  const history = useHistory()
  const onClickBack = () =>{
      history.goBack()
  }

  return(
    <Layout>
      <Topbar>
        <Icon name = 'left' onClick ={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <CenterWrapper>这个页面不存在</CenterWrapper>}
    </Layout>
  )
}
export {Tag}

