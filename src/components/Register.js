import React from 'react';

import 'antd/dist/antd.css';
import '../styles/Register.css'

import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('1.Received values of form: ', values);
        //values.token = 'ASHKED';
        //console.log('2.Received values of form: ', values);
        /*this.setState({
          id : values.id,
          password : values.password
        },() => console.log(this.state.id));*/
        //请求一个token属性的哈希值
        $.post('register',function(json){
            values.token = json.newToken;
        });
        //提交表单
        $.post('register',values,function(){
          console.log('succeed to register');
          browserHistory.push('/home');
        });  
        /*
        $.ajax({
          url:'register',
          type:'POST',
          dataType:'json',
          data:values,
          scriptCharset:'utf-8',
          success:function(data){
            console.log('succeed to register');
            browserHistory.push('/home');
          },
          error:function(err) {
            alert("注册失败！");
            console.error("Failed to register");
            browserHistory.push('/register');
          }
          });*/     
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
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
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
        >
          {getFieldDecorator('id', {
            rules: [{ required: true, message: '请输入你的学号!' }],
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
            rules: [{ required: true, message: '请输入你的昵称!' }],
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
            rules: [{ required: true, message: '请输入你的手机号!' }],
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
            rules: [{ required: true, message: '请输入你的QQ号！' }],
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
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
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