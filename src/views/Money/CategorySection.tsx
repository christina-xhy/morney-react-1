import styled from 'styled-components';

const CategorySection=styled.section`
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
export default CategorySection