/**
 * 面试 
 * intervieweeCheck(提交面试通过的人，参数字符串数组，内容是通过者id，passedIDs[])
 * intervieweeGet(获取还未面试的人员，得到的是对象数组)
 * 展示：学号，简介，姓名，年龄，性别
 */
import React from 'react';
import $ from 'jquery';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '学号',
  dataIndex: 'id'
},{
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '性别',
  dataIndex: 'gender',
}];


export default class IntervieweeList extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
    data: []
  };
  postInterviewed = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    $.get('test/intervieweeCheck.json',this.state.selectedRowKeys,() => {
      console.log('success post interviewIds');
      alert("提交成功");
    })
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  
  componentWillMount() {
    $.get("test/intervieweeGet.json",function(json){
      console.log(json);
      console.log(this.state.loading);
      for (let i=0;i<json.interviewee.length;i++) {
        this.state.data.push({
          key: json.interviewee[i].id,
          id: json.interviewee[i].id,
          name: json.interviewee[i].name,
          age: json.interviewee[i].age,
          gender:json.interviewee[i].gender,
          description: json.interviewee[i].description
        });
      }
      this.setState({});
      console.log(this.state.data);
    }.bind(this))
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.postInterviewed}
            disabled={!hasSelected} loading={loading}
          >提交</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
        </div>
        <Table 
          rowSelection={rowSelection} 
          columns={columns} 
          dataSource={this.state.data} 
          expandedRowRender={record => <p>{record.description}</p>} 
        />
      </div>
    );
  }
}
