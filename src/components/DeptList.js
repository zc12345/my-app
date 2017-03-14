//以卡牌形式展示部门信息
import React from 'react';
import $ from 'jquery';
import { Card, Col, Row, Upload, Icon } from 'antd';

export default class DeptList extends React.Component{
    addDept = () =>{
        console.log("add");
    }
    deleteDept = () =>{
        console.log("删除");
    }
    render() {
    return (
        <div>
            <div className="cardrow">
                <Row className="row1" gutter={16}>
                <Col lg={8} md={12} sm={24}>
                    <div>
                    <Card title="Card title" bordered={false}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24}>
                    <div>
                    <Card title="Card title" bordered={false}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24}>
                    <div>
                    <Card title="Card title" bordered={false} extra={<Icon type="delete"onClick={this.deleteDept}/>}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24}>
                <Card title="card title" bordered={false}>
                    <div className="custom-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    </div>
                </Card>
                </Col>
                <Col lg={8} md={12} sm={24}>
                <Card bordered={false} onClick={this.addDept}>
                    <Icon type="plus" />
                </Card>
                </Col>                
                </Row>
            </div>
        </div>
    );
    }
}