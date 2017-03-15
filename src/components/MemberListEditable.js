import React from 'react';
import { Table, Icon, Button, Input, Popconfirm, Card  } from 'antd';
import {Link} from 'react-router';
import EditableCell from './EditableCell';
import Warning from './Warning';
 
class EditableMemberList extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '学号',
      dataIndex: 'id',
      width: '15%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'id', text),
    }, {
      title: '姓名',
      dataIndex: 'name',
      width: '10%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
    }, {
      title: '性别',
      dataIndex: 'gender',
      width: '10%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'gender', text),
    }, {
      title: '年龄',
      dataIndex: 'age',
      width: '10%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
    }, {
      title: 'QQ',
      dataIndex: 'QQ',
      width: '15%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'QQ', text),
    }, {
      title: '手机',
      dataIndex: 'phoneNumber',
      width: '20%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'phoneNumber', text),
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        const { editable } = this.state.data[index].name;
        return (
          <span>
          <div className="editable-row-operations" style={{marginRight:'8px'}}>
            {
              editable ?
                <span>
                  <a onClick={() => this.editDone(index, 'save')}>保存 </a>
                  <Popconfirm title="放弃更改？" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(index)}><Icon type="edit" />修改</a>
                </span>
            }
          <span className="ant-divider" />
          <a href="#"><Icon type="delete" />删除</a>
          </div>
          </span>
        );
      },
    }];
    this.state = {
      data: [{
        key: '0',
        id: {
          value: 'Edward King 0',
        },
        name: {
          editable: false,
          value: 'Edward King 0',
        },
        gender: {
          editable: false,
          value: 'Edward King 0',
        },
        age: {
          editable: false,
          value: '32',
        },
        QQ: {
          editable: false,
          value: 'Edward King 0',
        },
        phoneNumber: {
          editable: false,
          value: 'London, Park Lane no. 0',
        }
      }],
    };
  }
  renderColumns(data, index, key, text) {
    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (<EditableCell
      editable={editable}
      value={text}
      onChange={value => this.handleChange(key, index, value)}
      status={status}
    />);
  }
  handleChange(key, index, value) {
    const { data } = this.state;
    data[index][key].value = value;
    this.setState({ data });
  }
  edit(index) {
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.setState({ data });
  }
  editDone(index, type) {
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.setState({ data }, () => {
      Object.keys(data[index]).forEach((item) => {
        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          delete data[index][item].status;
        }
      });
    });
  }
  render() {
    const { data } = this.state;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;
    return (
      <div>     
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default class MemberList extends React.Component{
  state = {
    selectDept:null,
    data: [],
    actionErrors:[],
    fieldErrors:[],
    actionMessages:[],
    token:''
  };
  handleSelectDept = (value) =>{this.setState({selectDept:value})}
  handleGetMember = (e) =>{
    
  }
  render(){
    return (
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
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.handlePost}>保存</Button>
        </div>
        <Warning value={this.state.actionErrors}/>
        <Warning value={this.state.fieldErrors}/>
        <Warning value={this.state.actionMessages}/>   
        <EditableMemberList data={this.state.data}/>
        <Card bordered={false}>
        <Link to='/register'><Icon type="plus" /></Link>
        </Card>
      </div>      
    );
  }
}