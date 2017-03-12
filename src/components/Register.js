import React from 'react';

import 'antd/dist/antd.css';
import '../styles/Register.css'

import { Form, Input, Tooltip, Icon, Checkbox, Button, DatePicker, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import Warning from './Warning';

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    fieldErrors:[]
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldValues) => {
      if (!err) {
        const values = {
          'id': fieldValues['id'],
          'password': fieldValues['password'],
          'repassword': fieldValues['repassword'],
          'name': fieldValues['name'],
          'phoneNumber': fieldValues['phoneNumber'],
          'QQ': fieldValues['QQ'],
          'birthday': fieldValues['birthday'].format('YYYY-MM-DD'),
          'gender': fieldValues['gender'],
          'description':fieldValues['description']
        }
        console.log('Received values of form: ', JSON.stringify(values));
        $.post('register', function (json) {
          values.token = json.newToken;
        });
        //提交表单
        $.post('register', JSON.stringify(values), function (response) {
          console.log('succeed to post');
          let resp = JSON.parse(response);
          this.setState({
            fieldErrors : resp.fieldError.map( function (item,index,array)  {
              return item;
            })});
          browserHistory.push('/home');
        }.bind(this));
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['repassword'], { force: true });
    }
    callback();
  }
  //进行注册成员时间限定的函数，规定注册成员必须大于15周岁且生于1970年之后
  disabledDate = (current) => {
    let oldestDate = new Date(1970,0);
    let now = new Date(Date.now());
    let newestDate = new Date();
    newestDate.setFullYear(now.getFullYear() - 15);
    return (current < oldestDate) || (current > newestDate); 
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
        <Warning  value={this.state.fieldErrors}/>
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem
          {...formItemLayout}
          label="学号"
          hasFeedback
        >
          {getFieldDecorator('id', {
            rules: [{
              required: true, message: '请输入你的学号!'
            }, {
              max: 10, message: "长度超过限制"
            }, {
              pattern: /[2-4]\d{9}/, message: "学号格式不正确！"
            }],
          })(
            <Input />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入你的密码!',
            }, {
              max: 30, message: "长度超过限制"
            }, {
              pattern: /[a-zA-Z\d_]{6,30}/, message: "密码只能为6-30位的字母数字与下划线组合，不能以下划线开头！"
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('repassword', {
            rules: [{
              required: true, message: '请确认你的密码!',
            }, {
              max: 30, message: "长度超过限制"
            }, {
              pattern: /[a-zA-Z\d_]{6,30}/, message: "密码只能为6-30位的字母数字与下划线组合，不能以下划线开头！"
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              姓名&nbsp;
              <Tooltip title="请填写真实姓名！">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入你的昵称!'
            }, {
              max: 20, message: "长度超过限制"
            }, {
              pattern: /[\u4e00-\u9f95a-zA-Z]{2,20}/, message: "姓名格式不正确！"
            }],
          })(
            <Input />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机"
          hasFeedback
        >
          {getFieldDecorator('phoneNumber', {
            rules: [{
              required: true, message: '请输入你的手机号!'
            }, {
              max: 11, message: "长度超过限制"
            }, {
              pattern: /(^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\d{8}$)|(^(5|6|8|9)\d{7}$)/, message: "手机号格式不正确！"
            }],
          })(
            <Input />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="QQ"
          hasFeedback
        >
          {getFieldDecorator('QQ', {
            rules: [{
              required: true, message: '请输入你的QQ号！'
            }, {
              max: 15, message: "长度超过限制"
            }, {
              pattern: /[1-9]\d{4,15}/, message: "QQ号格式不正确！"
            }],
          })(
            <Input />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('gender', {
            initialValue: 'true',
            rules: [{ required: true, message: '请选择你的性别!' }],
          })(
            <Select >
              <Option value='true'>男</Option>
              <Option value='false'>女</Option>
            </Select>
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="生日"
          hasFeedback
        >
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: '请选择你的生日!' }],
          })(
            <DatePicker disabledDate={this.disabledDate} showTime/>
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="简介"
          hasFeedback
        >
          {getFieldDecorator('description', {
            rules: [{ 
                required: true, message: '请填写你的简介!' 
              },{
                max: 500, message:'请不要超过500字！'
              }],
          })(
            <Input type="textarea" placeholder="个人简介" autosize={{ minRows: 2, maxRows: 40 }} />
            )}
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I had read the <a>agreement</a></Checkbox>
            )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Register</Button>
          <br />Already have an account <Link to='/login'>Login</Link>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const Register = Form.create()(RegistrationForm);

RegistrationForm.defaultProps = {};

export default Register;