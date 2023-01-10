import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper=styled.section`
 ul{
   display:flex;
   background:lightskyblue;
   font-size: 24px;
  >li{
    width:50%;
    text-align:center;
    padding:16px 0 ;
    position:relative;//夫相子绝；
    &.selected::after{
      content:'';
      display:block;//变为block元素
      height:3px;//不需要border，盒子变为实心的线条；
      background:indigo;
      position:absolute;//设置了绝对定位后，元素会消失，需要加width：100%
      bottom:0;//确定绝对定位的位置
      width:100%;//显示出元素；
      left:0;//防止bug出现
    }
  }
}
`
const CategorySection: React.FC = ()=>{
  const categoryMap = {'+':'收入','-':'支出'}
  type Keys = keyof typeof categoryMap
  const [categoryList]= useState<Keys[]>(['+','-'])//定义两种string，要加[],还有()参数类型,因为不会变则不需要set
  const [category,setCategory] =useState('-')//设置初始值

return(
  <Wrapper>
    <ul >
      {categoryList.map((c:'+' | '-')=>{
        return(<li key={c} className={category === c ? 'selected' : ''}
                   onClick={()=>{setCategory(c)}}>{categoryMap[c]}</li>)
      })}
    </ul>

  </Wrapper>
)
  //来设置数据的切换，点击谁就渲染谁
  // <li className={category === "-" ? 'selected' : '' } onClick={()=>{setCategory('-')}}>支出</li>
  // <li className={category === "+" ? 'selected' : ''} onClick={()=>{setCategory('+')}}>收入</li>
}
export default CategorySection