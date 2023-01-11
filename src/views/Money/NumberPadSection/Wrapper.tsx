import styled from 'styled-components';

const Wrapper= styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size:36px;
    line-height:72px;
    text-align:right;//字体靠最右边；
    padding:0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25)， //设置盒子内部的阴影,并且只有盒子下面有；
                inset 0 5px 5px -5px rgba(0,0,0,0.25); //设置盒子内部的阴影,并且盒子上面有；
  },
  > .pad{
  >button{
    width:25%;//确定一排5个元素；
    height:64px;//设置元素高度；
    float:left;//错位交叉；父左
    border:none;
    &.ok{
      height:128px;
      float:right;//浮动定位子右；如果爷爷display：flex则孙子浮动了，爸爸不会坍塌。
      //另一个方法是清楚浮动定位clearfix，现在scss设置初始化，然后直接在爸爸后面添加伪元素即可
    }
    &.zero{
      width:50%;
  }
    &:nth-child(1) {
      background: #E0E0E0;
    }
    &:nth-child(2),
    &:nth-child(5)
    {
      background:#D3D3D3;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9){
      background:#C1C1C1;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(13),
    &:nth-child(10)
    {
      background:#B8B8B8 ;
    } 
      &:nth-child(11),
      &:nth-child(14),
      &:nth-child(8)
      {
        background:#C1C1C1;
      }
    &:nth-child(15)
    {
      background:#B8B8B8;
    }
    &:nth-child(12)
    { 
      background:#A9A9A9;
  }
}
`
export {Wrapper}