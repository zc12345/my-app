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
import Warning from './Warning';
import isEmpty from './Function';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '学号',
  dataIndex: 'id'
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '性别',
  dataIndex: 'gender',
}, {
  title: '手机',
  dataIndex: 'phoneNumber',
}, {
  title: 'QQ',
  dataIndex: 'QQ',
}];


export default class IntervieweeList extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
    data: [],
    actionErrors: [],
    fieldErrors: [],
    actionMessages: [],
    token: ''
  };
  postInterviewed = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    $.post("generateToken", function (response) {
      console.log(response);
      this.setState({ token: response.token });
    }.bind(this))
    let passed = {
      passedIDs: this.state.selectedRowKeys,
      token: this.state.token
    }
    $.post('intervieweeCheck', passed, (response) => {
      console.log('success post interviewIds');
      console.log(response);
      if (isEmpty(response.fieldErrors) && isEmpty(response.actionErrors)) {
        this.setState({data:response.restInterviewees});
      } else {
        this.setState({ fieldErrors: response.fieldErrors, actionErrors: response.actionErrors });//对于返回的fieldError进行处理
      }
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
    $.post("intervieweeGet", function (response) {
      console.log(response);
      for (let i = 0; i < response.restInterviewees.length; i++) {
        this.state.data.push({
          key: response.restInterviewees[i].ID,
          id: response.restInterviewees[i].ID,
          name: response.restInterviewees[i].name,
          age: response.restInterviewees[i].age,
          gender: response.restInterviewees[i].gender,
          phoneNumber: response.restInterviewees[i].phoneNumber,
          QQ: response.restInterviewees[i].QQ,
          description: response.restInterviewees[i].description
        });
      }
      this.setState({
        actionErrors: response.actionErrors,
        fieldErrors: response.fieldErrors,
        actionMessages: response.actionMessages
      });
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
        <Warning value={this.state.actionErrors} />
        <Warning value={this.state.fieldErrors} />
        <Warning value={this.state.actionMessages} />
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
