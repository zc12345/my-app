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
                <Row className="row1">
                <Col span="11">
                    <Card title="Card title" bordered={false}>
                        致力于微小而美好的改变，力求在细节上精益求精，不仅让业务产品更加实用和可靠，而且还能让『用户』感到小惊喜。
                    </Card>
                </Col>
                <Col span="2"/>
                <Col span="11">
                    <Card title="Card title" bordered={false}>
                        制定通俗而科学的设计原则、运用面向对象的方法、使用一致的文档沟通机制，给予研发团队一种高确定性、低熵值的研发状态。
                    </Card>
                </Col>
                </Row>
                <Row/>   
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
export default Home;