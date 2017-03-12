import React from 'react';
import {Link, browserHistory} from 'react-router';
import { Layout, Menu} from 'antd';
const {Header} = Layout;

export default class MyHeader extends React.Component{
    state = {
      user : this.props.user
    }

    render(){
      if(this.props.user){
            return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to='/home'>{this.state.user}</Link></Menu.Item>
          <Menu.Item key="2"><Link onClick={this.props.callbackParent}>注销</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/manage'>管理</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/home'>主页</Link></Menu.Item>
        </Menu>
      </Header>                
            );
      } else {
        return (
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to='/login'>登录</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/register'>注册</Link></Menu.Item>
            </Menu>            
          </Header>
        )
      }
    }
} 