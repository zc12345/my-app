/**
 * created by zc12345
 * date: 03/04/2017
 * time: 10:07
 * description: 本组件的作用是对main结点进行渲染，展现整体布局
 */
import React from 'react';
import {Link} from 'react-router';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Main extends React.Component {
  render() {
    return (
    <Layout className="layout">
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
          <Menu.Item key="3"><Link to='/home'>主页</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item><Link to='/Home'>Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <center>
              {this.props.children}
            </center>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
    );
  }
}
Main.defaultProps = {
};
export default Main;
