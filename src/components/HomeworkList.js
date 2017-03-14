import React from 'react';
import { Table, Icon, Button, Input, Popconfirm  } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '学号',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '部门',
  dataIndex: 'dept',
  key: 'dept',
}, {
  title: '次数',
  dataIndex: 'times',
  key: 'times'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <Button type="primary" icon="download" shape="circle" />
      <span className="ant-divider" />
      <a href="#"><Icon type="delete" />删除</a>
      <span className="ant-divider" />
      <a href="#" ><Icon type="check" shape="circle"/>评分</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default class HomeworkList extends React.Component {
    render(){
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}