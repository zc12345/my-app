//个人中心
import React from 'react';
import { Row, Col } from 'antd';
import Avatar from './Avatar';

const Userinfo = () =>{
    return (
        <div>
            <p>Userinfo</p> 
            <Row gutter={32}>
                <Col span={16}>
                    <div>
                        
                    </div>
                </Col>
                <Col span={8}><Avatar/></Col>
            </Row>
        </div>
    )
}

export default Userinfo;