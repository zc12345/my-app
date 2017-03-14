//个人中心
import React from 'react';
import { Row, Col, Input, Card } from 'antd';
import Avatar from './Avatar';

const Userinfo = () =>{
    return (
        <div>
            <Row gutter={32}>
                <Col lg={8} md={12} sm={24}>
                <Card title="基本信息" >
                    <form>
                    <div>
                        <h3>学号</h3>
                        <Input disabled defaultValue={localStorage.id}/>
                    </div>
                    <div>
                        <h3>姓名</h3>
                        <Input defaultValue={localStorage.id}/>
                    </div>
                    <div>
                        <h3>性别</h3>
                        <Input defaultValue={localStorage.id}/>
                    </div>
                    <div>
                        <h3>年龄</h3>
                        <Input defaultValue={localStorage.id}/>
                    </div>
                    </form>
                </Card>
                </Col>
                <Col lg={8} md={12} sm={24}>
                <Card title="其他信息" >
                    <form>
                    <div>
                        <h3>QQ</h3>
                        <Input defaultValue={localStorage.id}/>
                    </div>
                    <div>
                        <h3>手机</h3>
                        <Input defaultValue={localStorage.id}/>
                    </div>
                    <div>
                        <h3>生日</h3>
                        <Input defaultValue={localStorage.id}/>
                    </div>
                    <div>
                        <h3>自我简介</h3>
                        <Input type="textarea" autosize={{ minRows: 2, maxRows: 40 }} defaultValue={localStorage.id}/>
                    </div>
                    </form>                    
                </Card>                
                </Col>
                <Col lg={8} md={12} sm={24}>
                <Card title="用户头像">
                    <Avatar/>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Userinfo;