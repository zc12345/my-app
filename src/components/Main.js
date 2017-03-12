/**
 * created by zc12345
 * date: 03/04/2017
 * time: 10:07
 * description: 本组件的作用是对main结点进行渲染，展现整体布局
 */
import React from 'react';
import {Link, browserHistory} from 'react-router';
import 'antd/dist/antd.css';

import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

import MyHeader from './MyHeader'; 

class Main extends React.Component {
  state = {
    userid:localStorage.id,
    username:''
  }
  //当logout的时候注销账号进行刷新
  onChildChanged = (e) => {
    localStorage.clear();
    this.setState({userid:''});
    browserHistory.push('/login');
  } 
  render() {
    return (
    <Layout className="layout">
      <MyHeader user={this.state.userid} callbackParent={this.onChildChanged}/>
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
        IBM CLUB ©2017 Created by XJTU IBM CLUB
      </Footer>
    </Layout>
    );
  }
}
Main.defaultProps = {
};
export default Main;
