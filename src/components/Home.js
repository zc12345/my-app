import 'antd/dist/antd.css';
import '../styles/Home.css';

import React from 'react';
import {Link} from 'react-router';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Home extends React.Component {
    render(){
      return (
      <Layout style={{ padding: '0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu theme="dark"
            mode="inline"
            defaultSelectedKeys={['userinfo']}
            defaultOpenKeys={['user']}
            style={{ height: '100%' }}
          >
            <SubMenu key="user" title={<span><Icon type="user" />个人中心</span>}>
              <Menu.Item key="userinfo"><Link to='/user'>修改信息</Link></Menu.Item>
              <Menu.Item key="submit">提交作业</Menu.Item>
              <Menu.Item key="download">文件下载</Menu.Item>
              <Menu.Item key="other">其他</Menu.Item>
            </SubMenu>
            <SubMenu key="notice" title={<span><Icon type="notification" />最新通知</span>}>
              <Menu.Item key="meeting">例会通知</Menu.Item>
              <Menu.Item key="homework">作业通知</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {this.props.children}
        </Content>
      </Layout>
      );
    }    
}
