import React from 'react';
import {Link, browserHistory} from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const {Header} = Layout;

export default class MyHeader extends React.Component{
    state = {
      user : this.props.user
    }

    render(){
      if(this.props.user){
            return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="user"><Link to='/user'><Icon type="user" />个人</Link></Menu.Item>
          <Menu.Item key="logout"><Link onClick={this.props.callbackParent}><Icon type="logout" />注销</Link></Menu.Item>
          <Menu.Item key="manage"><Link to='/manage'><Icon type="solution" />管理</Link></Menu.Item>
          <Menu.Item key="home"><Link to='/home'><Icon type="home" />社团</Link></Menu.Item>
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