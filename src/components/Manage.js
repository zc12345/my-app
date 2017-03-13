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
            defaultSelectedKeys={['homeworkList']}
            defaultOpenKeys={['filework']}
            style={{ height: '100%' }}
          >
            <SubMenu key="filework" title={<span><Icon type="user" />文件作业</span>}>
              <Menu.Item key="issueHomework">发布作业</Menu.Item>
              <Menu.Item key="Homework">全部作业</Menu.Item>
              <Menu.Item key="homeworkList"><Link to='/homeworkList'>查看提交</Link></Menu.Item>
              <Menu.Item key="upload"><Link to='/upload'>上传文件</Link></Menu.Item>
              <Menu.Item key="filelist"><Link to='/filelist'>文件列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="members" title={<span><Icon type="laptop" />部员管理</span>}>
              <Menu.Item key="memberList">部员信息</Menu.Item>
              <Menu.Item key="interview"><Link to='/interview'>招新面试</Link></Menu.Item>
              <Menu.Item key="deptList">部门管理</Menu.Item>
            </SubMenu>
            <SubMenu key="meetingNotice" title={<span><Icon type="notification" />例会通知</span>}>
              <Menu.Item key="issueMeeting">发布例会</Menu.Item>
              <Menu.Item key="meetingList">全部例会</Menu.Item>
              <Menu.Item key="checkin"><Link to='/checkin'>例会签到</Link></Menu.Item>
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
