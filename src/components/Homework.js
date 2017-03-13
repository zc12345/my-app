//全部发布的作业的列表，允许修改作业信息和发布作业
import React from 'react';

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
  title: '发布时间',
  dataIndex: 'issuetime',
  key: 'issuetime'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#"><Icon type="edit" />编辑</a>
      <span className="ant-divider" />
      <a href="#"><Icon type="delete" />删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  homework: 'John Brown',
  issuetime: 32,
  description: 'New York No. 1 Lake Park',
}, {
  key: '2',
  homework: 'Jim Green',
  issuetime: 42,
  description: 'London No. 1 Lake Park',
}, {
  key: '3',
  homework: 'Joe Black',
  issuetime: 32,
  description: 'Sidney No. 1 Lake Park',
}];

export default class HomeworkList extends React.Component {
    render(){
        return (
            <Table 
                columns={columns} dataSource={data} 
                expandedRowRender={record => <p>{record.description}</p>}
            />
        );
    }
}