import 'antd/dist/antd.css';
import '../styles/Login.css';

import React from 'react';
import {browserHistory, Link} from 'react-router';
import $ from 'jquery';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var postLogin = {};
        postLogin.id = values.id;
        postLogin.password = values.password;
        console.log(JSON.stringify(postLogin));
        $.ajax({
          url:'login',
          type:'POST',
          dataType:'json',
          data:JSON.stringify(postLogin),
          scriptCharset:'utf-8',
          success:function(data){
            console.log('success login');
            browserHistory.push('/home');
          },
          error:function(err) {
            alert("登录失败！");
            console.error("Failed to login");
            browserHistory.push('/login');
          }
          });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('id', {
            rules: [{ 
                required: true, message: '请输入你的学号!' 
              },{
                max:10, message:"长度超过限制"
              },{ 
                pattern: /[2-4]\d{9}/, message:"学号格式不正确！"
              }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="student ID" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ 
                required: true, message: '请输入你的密码!' 
              }, {
              max: 30, message:"长度超过限制"
              },{
                pattern: /[a-zA-Z\d_]{6,30}/, message:"密码只能为6-30位的字母数字与下划线组合，不能以下划线开头！"
              }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='/register'>register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

WrappedNormalLoginForm.defaultProps = {
};
export default WrappedNormalLoginForm;
