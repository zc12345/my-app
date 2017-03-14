//已经发布的所有例会及其详细信息
//发布的全部作业的列表
import React from 'react';

import { Table, Icon, Button } from 'antd';

const columns = [{
  title: '作业',
  dataIndex: 'homework',
  key: 'homework',
},{
  title: '发布者',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '部门',
  dataIndex: 'dept',
  key: 'dept',
}, {
  title: '作业批次',
  dataIndex: 'times',
  key: 'times'
}, {
  title: '发布时间',
  dataIndex: 'issuetime',
  key: 'issuetime'
}, {
  title: '截止时间',
  dataIndex: 'deadline',
  key: 'deadline'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
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

export default class MeetingList extends React.Component {
    render(){
        return (
            <Table 
                columns={columns} dataSource={data} 
                expandedRowRender={record => <p>{record.description}</p>}
            />
        );
    }
}