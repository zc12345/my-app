import 'antd/dist/antd.css';

import React from 'react';
import {Link} from 'react-router';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Manage extends React.Component {
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
            <SubMenu key="sub1" title={<span><Icon type="user" />文件作业</span>}>
              <Menu.Item key="1">发布作业</Menu.Item>
              <Menu.Item key="2"><Link to='/homeworkList'>查看提交</Link></Menu.Item>
              <Menu.Item key="3">上传文件</Menu.Item>
              <Menu.Item key="4">文件列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />新生部员</span>}>
              <Menu.Item key="5">部员管理</Menu.Item>
              <Menu.Item key="6"><Link to='/interview'>招新面试</Link></Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />例会通知</span>}>
              <Menu.Item key="9">发布例会</Menu.Item>
              <Menu.Item key="10">全部例会</Menu.Item>
              <Menu.Item key="11">例会签到</Menu.Item>
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
