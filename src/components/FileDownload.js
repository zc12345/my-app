import React from 'react';
import { Table, Icon, Button } from 'antd';

const columns = [{
  title: '文件',
  dataIndex: 'file',
  key: 'file',
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
  title: '上传时间',
  dataIndex: 'uploadtime',
  key: 'uploadtime'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <Button type="primary" icon="download" shape="circle" />
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

export default class FileDownload extends React.Component {
    render(){
        return (
            <Table 
                columns={columns} dataSource={data} 
                expandedRowRender={record => <p>{record.description}</p>}
            />
        );
    }
}