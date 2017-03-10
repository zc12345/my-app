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
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />个人中心</span>}>
              <Menu.Item key="1"><Link to='/user'>修改信息</Link></Menu.Item>
              <Menu.Item key="2">提交作业</Menu.Item>
              <Menu.Item key="3">文件下载</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />社团文化</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />最新通知</span>}>
              <Menu.Item key="9">例会通知</Menu.Item>
              <Menu.Item key="10">作业通知</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
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
