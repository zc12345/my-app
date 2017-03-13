import React from 'react';

import { Card } from 'antd';

export default class HomeworkNotice extends React.Component{
    render(){
        return (
            <Card loading title="最新作业" style={{ width: '34%' }}>
                Whatever content
            </Card>
        );
    }
}
