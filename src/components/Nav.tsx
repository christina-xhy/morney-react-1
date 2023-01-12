import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
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
        &.selected{
          color:grey;
          //.icon{
          //  fill:grey;
          //}
        }
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

//NavLink 需要配置svg0-loader，创建空的对象，如果改变颜色则是修改attrs ：fill
//NavLink activeClassName 属性表示点击图标同时也可以跳转，添加上exact精准匹配，则进入tag:id 就不会再变红，但是一般不加
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags"  activeClassName="selected">
            <Icon name="tags"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="dollar"/>
            记账页
          </NavLink>
        </li>
        <li>

          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="charts"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
