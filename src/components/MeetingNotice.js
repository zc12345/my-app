import React from 'react';

import { Card } from 'antd';

export default class MeetingNotice extends React.Component{
    render(){
        return (
            <Card loading title="最新例会" style={{ width: '34%' }}>
                Whatever content
            </Card>
        );
    }
}
