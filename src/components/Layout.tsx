import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  //占满固定高
  display: flex;//固定为flex布局
  flex-direction: column;
  //wrapper里的元素nav和main 呈现上下结构布局 
`;
const Main = styled.div`
  flex-grow: 1;//main的内容尽量足够高，flex足够高
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  };
`;
type Props ={
  className?: string,
  scrollTop?:number,
}
//优化 固定scrollTop
const Layout:React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null)
  //渲染之后再执行useEffect 代码
  //useRef 现获取dom元素
  useEffect(()=> {
    setTimeout(() => {
      if (!mainRef.current) {return}
      mainRef.current.scrollTop = props.scrollTop!; // 当前的scroll值
    }, 0)
  },[props.scrollTop])
  return (
    <Wrapper>
      <Main ref={mainRef} className = {props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

//给某个组件设置默认的props初始值
Layout.defaultProps = {
  scrollTop :0
}
export default Layout;
