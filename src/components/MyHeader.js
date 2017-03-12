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
          defaultSelectedKeys={['user']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="user"><Link to='/user'>{this.state.user}</Link></Menu.Item>
          <Menu.Item key="logout"><Link onClick={this.props.callbackParent}>注销</Link></Menu.Item>
          <Menu.Item key="manage"><Link to='/manage'>管理</Link></Menu.Item>
          <Menu.Item key="home"><Link to='/home'>主页</Link></Menu.Item>
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
              defaultSelectedKeys={['login']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="login"><Link to='/login'>登录</Link></Menu.Item>
              <Menu.Item key="register"><Link to='/register'>注册</Link></Menu.Item>
            </Menu>            
          </Header>
        )
      }
    }
} 