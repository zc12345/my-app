import 'antd/dist/antd.css';
import '../styles/Login.css';

import React from 'react';
import {browserHistory, Link} from 'react-router';
import $ from 'jquery';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      id : null,
      password: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values.id);
        this.setState({
          id : values.id,
          password : values.password
        },() => console.log(this.state.id));
        /**
         * 一开始发现set之后state值仍然不变，后来查资料得知setState是异步的
         * 方法有三个，一个是使用第二参数回调之后执行，一个是用componentDidUpdate()方法，还有就是mbox的@observer,@observable
         */
        //console.log(this.state.id);
        //测试页面是否可以正常跳转
        //browserHistory.push('/home');
        //但是。。。我这要怎么测试呢？
        $.ajax({
          url:'login',
          type:'POST',
          dataType:'json',
          data:values,
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
    //console.log('Hello,this is login.js');
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('id', {
            rules: [{ required: true, message: '请输入你的学号!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="student ID" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }],
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
