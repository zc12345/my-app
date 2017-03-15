import React from 'react';

import 'antd/dist/antd.css';

import {Card, Form, Input, Icon, Checkbox, Button, Select, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import Warning from './Warning';

class AddDeptForm extends React.Component {
  state = {
    confirmDirty: false,
    fieldErrors: [],
    actionErrors:[],
    token:''
  };
  componentWillMount() {
    $.post("generateToken",function(json){
      console.log(json);
      this.setState({token:json.token});
    }.bind(this))
  }  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldValues) => {
      if (!err) {
        const values = {
          'deptId': fieldValues['deptid'],
          'deptName': fieldValues['deptName'],
          'description': fieldValues['description'],
          'token':this.state.token
        }
        console.log('Received values of form: ', JSON.stringify(values));
        //提交表单
        $.post('addDepartment', JSON.stringify(values), function (response) {
          console.log('succeed to post');
          let resp = JSON.parse(response);
          if (resp.actionError || resp.fieldError){
          this.setState({
            fieldErrors: resp.fieldError.map(function (item, index, array) {
              return item;
            }),
            actionErrors: resp.fieldError.map(function (item, index, array) {
                return item;
            })
          });
        } else {
            console.log('添加成功');
            browserHistory.push('/deptlist');
          }
        }.bind(this));
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    return (
      <div>
        <Warning value={this.state.fieldErrors} />
        <Warning value={this.state.actionErrors} />
        <Form onSubmit={this.handleSubmit} className="AddDept-form">
          <FormItem
            {...formItemLayout}
            label="部门编号"
            hasFeedback
          >
            {getFieldDecorator('deptId', {
              rules: [{
                required: true, message: '请输入部门编号!'
              }, {
                max: 3, message: "长度超过限制"
              }, {
                pattern: /[2-4]\d{9}/, message: "学号格式不正确！"
              }],
            })(
              <Input />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="部门名称"
            hasFeedback
          >
            {getFieldDecorator('deptName', {
              rules: [{
                required: true, message: '请输入部门名称!'
              }, {
                max: 20, message: "长度超过限制"
              }, {
                pattern: /[\u4e00-\u9f95a-zA-Z]{1,20}/, message: "含有非法字符！"
              }],
            })(
              <Input />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="部门简介"
            hasFeedback
          >
            {getFieldDecorator('description', {
              rules: [{
                required: true, message: '请填写部门简介!'
              }, {
                max: 1000, message: '请不要超过1000字！'
              }],
            })(
              <Input type="textarea" placeholder="部门简介" autosize={{ minRows: 2, maxRows: 40 }} />
              )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">添加</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const MyAddDept = Form.create()(AddDeptForm);

const AddDept =() =>{
  return (
    <div style={{paddingTop:'30px'}}>
        <Col sm={24} md={16} lg={12}>
      <Card style={{background:"transparent"}}>
      <MyAddDept/>
      </Card>
        </Col>
    </div>
  );
}

export default AddDept;