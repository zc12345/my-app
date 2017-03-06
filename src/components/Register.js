import React from 'react';

import 'antd/dist/antd.css';
import '../styles/Register.css'

import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
//const Option = Select.Option;

import {Link} from 'react-router';

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
    /*const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );*/
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem
          {...formItemLayout}
          label="学号"
        >
          {getFieldDecorator('stuid', {
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
          {getFieldDecorator('confirm', {
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
              昵称&nbsp;
              <Tooltip title="你想让别人怎么称呼你?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入你的昵称!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入你的手机号!' }],
          })(
            <Input /*addonBefore={prefixSelector}*/ />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="微信"
        >
          {getFieldDecorator('wechat', {
            rules: [{ required: true, message: '请输入你的微信号!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="QQ"
        >
          {getFieldDecorator('qq', {
            rules: [{ required: false }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '输入的是无效邮箱!',
            }, {
              required: false,
            }],
          })(
            <Input />
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