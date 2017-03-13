import React from 'react';
import { Table, Icon, Button } from 'antd';

const columns = [{
  title: '作业',
  dataIndex: 'file',
  key: 'file',
}, {
  title: '部门',
  dataIndex: 'dept',
  key: 'dept',
},{
  title: '次数',
  dataIndex: 'times',
  key: 'times',
}, {
  title: '上传时间',
  dataIndex: 'uploadtime',
  key: 'uploadtime'
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

export default class HomeworkHistory extends React.Component {
    render(){
        return (
            <Table 
                columns={columns} dataSource={data} 
                expandedRowRender={record => <p>{record.description}</p>}
            />
        );
    }
}