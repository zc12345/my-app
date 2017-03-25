import React from 'react';
import { Carousel, Card, Col, Row  } from 'antd';
import '../styles/Home.css'; 

const Home =()=>{
    return (
        <div>
            <Carousel autoplay effect="fade" className="carousel">
                <div ><h3>1</h3></div>
                <div ><h3>2</h3></div>
                <div ><h3>3</h3></div>
                <div ><h3>4</h3></div>
            </Carousel>
            <div className="cardrow">
                <Row className="row1" gutter={16}>
                <Col lg={8} md={12} sm={24}>
                    <div>
                    <Card title="部门1" bordered={false}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24}>
                    <div>
                    <Card title="部门2" bordered={false}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24}>
                    <div>
                    <Card title="部门3" bordered={false}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24}>
                <Card title="通知1" bordered={false}>
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
                <Card title="通知2" bordered={false}>
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
                <Card title="通知3" bordered={false}>
                    <div className="custom-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    </div>
                </Card>
                </Col>
                </Row>
            </div>
        </div>
    );
}
export default Home;