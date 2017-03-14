import React from 'react';
import { Card, Form, Input, Icon, Select, Row, Col, Button, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class HomeworkIssueForm extends React.Component {
    handleSubmit = (e) => {
        console.log('提交作业发布信息');
    }
    disabledDate = (e) => {
        return e < Date.now();
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
            <Form onSubmit={this.handleSubmit} className="issue-form">
                <FormItem
                    {...formItemLayout}
                    label="作业部门"
                >
                    {getFieldDecorator('dept', {
                        initialValue: 'java',
                        rules: [{ required: true, message: '请选择发布部门!' }],
                    })(
                        <Select >
                            <Option value='java'>Java</Option>
                            <Option value='python'>Python</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="作业次数"
                >
                    {getFieldDecorator('times', {
                        initialValue: '1',
                        rules: [{ required: true, message: '请选择发布部门!' }],
                    })(
                        <Select >
                            <Option value='1'>第一次</Option>
                            <Option value='2'>第二次</Option>
                            <Option value='3'>第三次</Option>
                            <Option value='4'>第四次</Option>
                            <Option value='5'>第五次</Option>
                            <Option value='6'>第六次</Option>
                            <Option value='7'>第七次</Option>
                            <Option value='8'>第八次</Option>
                            <Option value='9'>第九次</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="截止时间"
                    hasFeedback
                >
                    {getFieldDecorator('deadline', {
                        rules: [{ required: true, message: '请选择截止时间!' }],
                    })(
                        <DatePicker disabledDate={this.disabledDate} showTime />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="作业要求"
                    hasFeedback
                >
                    {getFieldDecorator('description', {
                        rules: [{
                            required: true, message: '请填写作业要求!'
                        }, {
                            max: 2000, message: '请不要超过2000字！'
                        }],
                    })(
                        <Input type="textarea" placeholder="请尽量在2000字以内" autosize={{ minRows: 2, maxRows: 40 }} />
                        )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">发布</Button>
                </FormItem>
            </Form>
        )
    }
}
const HomeworkIssueCreate = Form.create()(HomeworkIssueForm);
const HomeworkIssue = () => {
    return (
        <Card title='发布作业' style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
            <HomeworkIssueCreate />
        </Card>
    );
}
export default HomeworkIssue;