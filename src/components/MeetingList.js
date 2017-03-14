//已经发布的所有例会及其详细信息
import React from 'react';

import { Table, Icon, Button } from 'antd';

const columns = [{
  title: '发布者',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '部门',
  dataIndex: 'dept',
  key: 'dept',
}, {
  title: '例会次数',
  dataIndex: 'times',
  key: 'times'
}, {
  title: '例会时间',
  dataIndex: 'meetingtime',
  key: 'issuetime'
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