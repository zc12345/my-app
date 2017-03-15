import 'antd/dist/antd.css';
import '../styles/Login.css';

import React from 'react';
import {browserHistory, Link} from 'react-router';
import $ from 'jquery';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import Warning from './Warning';

const isEmpty = (errors) =>{
  for (let error in errors){return false;}
  return true;
}

class NormalLoginForm extends React.Component {
  state = {
    fieldErrors :[],
    token:''
  }
  //获取token值
  componentWillMount() {
    $.post("generateToken",function(json){
      console.log(json);
      this.setState({token:json.token});
    }.bind(this))
  }
  //提交表单
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var postLogin = {
            id : values.id,
            password : values.password,
            token: this.state.token
        };
        console.log(postLogin);
        $.post("login",postLogin,function(response){
            console.log('success post');
            if(isEmpty(response.fieldErrors) && isEmpty(response.actionErrors)){
              sessionStorage.id=values.id;
              browserHistory.push('/user');//返回error为空的时候跳转到主页
              //$.post("indexRedirect");//使用push方法之后如果刷新页面会被struts拦截，所以只好通过后台刷新
          } else {
            this.setState({fieldErrors : response.fieldErrors,actionErrors:response.actionErrors});//对于返回的fieldError进行处理
            browserHistory.push('/login');
          }
        }.bind(this))
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Warning value={this.state.fieldErrors}/>
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
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

WrappedNormalLoginForm.defaultProps = {
};
export default WrappedNormalLoginForm;
