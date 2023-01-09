import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  //占满固定高
  display: flex;//固定为flex布局
  flex-direction: column;
  //wrapper和main 呈现上下结构布局 
`;
const Main = styled.div`
  flex-grow: 1;//main的内容尽量足够高，flex足够高
  overflow: auto;
`;
const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;
