//部门成员列表
import React from 'react';
import { Table, Icon, Button, Input,  Card, Select  } from 'antd';
import {Link} from 'react-router';
import Warning from './Warning';
import $ from 'jquery';

const columns = [{
  title: '学号',
  dataIndex: 'id',
  key: 'id',
},{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '部门',
  dataIndex: 'dept',
  key: 'dept',
}, {
  title: '性别',
  dataIndex: 'gender',
  key: 'gender'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'QQ',
  dataIndex: 'QQ',
  key: 'QQ'
}, {
  title: '手机',
  dataIndex: 'phoneNumber',
  key: 'phoneNumber'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#"><Icon type="edit" />修改</a>
      <span className="ant-divider" />
      <a href="#"><Icon type="delete" />删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  file: 'John Brown',
  uploadtime: 32,
  description: 'New York No. 1 Lake Park',
}, {
  key: '2',
  file: 'Jim Green',
  uploadtime: 42,
  description: 'London No. 1 Lake Park',
}, {
  key: '3',
  file: 'Joe Black',
  uploadtime: 32,
  description: 'Sidney No. 1 Lake Park',
}];

export default class MemberList extends React.Component {
    state = {
        actionErrors:[],
        actionMessages:[],
        fieldErrors:[],
        token:[],
        data:[],
        dept:null
    }
    handlerDelete = (key) =>{
        
    }
    handleSelectDept = (dept) =>{
        this.setState({dept:dept});
    }
    handleGetMember = (dept) =>{
        if(this.state.dept===null){
            this.setState({fieldErrors:["请选择部门！"]});
        }else{
            $.post("",this.state.dept,(json)=>{
                console.log(json);

            })
        }
    }
    render(){
        return (
        <div>
            <Warning value={this.state.actionErrors}/>
            <Warning value={this.state.fieldErrors}/>
            <Warning value={this.state.actionMessages}/>
            <div>
                部门
                <Select defaultValue="java" style={{ width: 120,padding:'20px' }} onChange={this.handleSelectDept}>
                <Option value="1">C++</Option>
                <Option value="2">python</Option>
                <Option value="3">java</Option>
                </Select>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.handleGetMember}>检索</Button>
                </div>
                {/*<div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.handlePost}>保存</Button>
                </div>*/}
            </div>
            <Table 
                columns={columns} dataSource={data} 
                expandedRowRender={record => <p>{record.description}</p>}
            />
        </div>
        );
    }
}