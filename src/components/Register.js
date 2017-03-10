import React from 'react';

import 'antd/dist/antd.css';
import '../styles/Register.css'

import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
/**
 * 当输入数据的时候会出现下面的提示信息，不知道为什么：
 * Warning: `getFieldDecorator` will override `value`, 
 * so please don't set `value` directly and use `setFieldsValue` to set it.
 */
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        $.post('register',function(json){
            values.token = json.newToken;
        });
        //提交表单
        $.post('register',values,function(){
          console.log('succeed to register');
          browserHistory.push('/home');
        });    
      }
    });
  }
  //性别选择器
  selectGender = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      gender: e.target.value,
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
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem
          {...formItemLayout}
          label="学号"
          hasFeedback
        >
          {getFieldDecorator('id', {
            rules: [{ 
                required: true, message: '请输入你的学号!' 
              },{
                max:10, message:"长度超过限制"
              },{ 
                pattern: /[2-4]\d{9}/, message:"学号格式不正确！"
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
              max: 30, message:"长度超过限制"
            },{
              pattern: /[a-zA-Z\d_]{6,30}/, message:"密码只能为6-30位的字母数字与下划线组合，不能以下划线开头！"
            },{
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
            },{
              max:30, message:"长度超过限制"
            },{
              pattern: /[a-zA-Z\d_]{6,30}/, message:"密码只能为6-30位的字母数字与下划线组合，不能以下划线开头！"
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
              },{
                max:20, message:"长度超过限制"
              },{
                pattern: /[\u4e00-\u9f95a-zA-Z]{2,20}/,message:"姓名格式不正确！"
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
              },{
                max:11, message:"长度超过限制"
              },{
                pattern: /(^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\d{8}$)|(^(5|6|8|9)\d{7}$)/,message:"手机号格式不正确！"
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
            },{
              max:15, message:"长度超过限制"
            },{
              pattern:/[1-9]\d{4,15}/,message:"QQ号格式不正确！"
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              生日&nbsp;
              <Tooltip title="格式：2000-01-01">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: '请输入你的生日!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: '' }],
          })(
          <RadioGroup onChange={this.selectGender} value={this.state.gender}>
            <Radio value={true}>男</Radio>
            <Radio value={false}>女</Radio>
          </RadioGroup>
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
          <br/>Already have an account <Link to='/login'>Login</Link>
        </FormItem>
      </Form>
    );
  }
}

const Register = Form.create()(RegistrationForm);

RegistrationForm.defaultProps = {};

export default Register;