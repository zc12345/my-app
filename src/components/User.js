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
        <Sider 
        breakpoint='md'
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        width={200} style={{ background: '#fff' }}>
          <Menu theme="dark"
            mode="inline"
            defaultSelectedKeys={['homeworknotice']}
            defaultOpenKeys={['notice']}
            style={{ height: '100%' }}
          >
            <SubMenu key="user" title={<span><Icon type="user" />个人中心</span>}>
              <Menu.Item key="userinfo"><Link to='/userinfo'>修改信息</Link></Menu.Item>
              <Menu.Item key="submit"><Link to='/upload'>提交作业</Link></Menu.Item>
              <Menu.Item key="download"><Link to='/filedownload'>文件下载</Link></Menu.Item>
              <Menu.Item key="other"><Link to='/homeworkhistory'>作业历史</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="notice" title={<span><Icon type="notification" />最新通知</span>}>
              <Menu.Item key="meetingnotice"><Link to='/meetingnotice'>例会通知</Link></Menu.Item>
              <Menu.Item key="homeworknotice"><Link to='/homeworknotice'>作业通知</Link></Menu.Item>
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
