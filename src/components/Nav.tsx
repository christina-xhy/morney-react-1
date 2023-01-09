import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;//设置高度 整体高度 56-16*2padding = 24
  box-shadow: 0 0 3px rgba(0,0,0,0.25);//阴影
  > ul {
    display:flex;//横向布局
    > li{
      width: 33.3333%;
      text-align:center;//文本内容居中
      a{
        display: flex;//分别居中
        flex-direction: column;//icon和文字 纵向分布；
        padding: 4px 0;
        justify-content: center;//X轴中间--start - space-between/space-around /space-evenly 
        //align-content Y轴--start/ space-between/space-around /space-evenly
        align-items: center;//Y轴 item（元素）stretch-center-start-end 自身大小居中 
        // justify-item stretch-center-start-end 自身大小居中 
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>

          <Link to="/tags">
            <Icon name="tags"/>
            标签
          </Link>
        </li>
        <li>

          <Link to="/money">
            <Icon name="dollar"/>
            记账页
          </Link>
        </li>
        <li>

          <Link to="/statistics">
            <Icon name="charts"/>
            统计页
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
