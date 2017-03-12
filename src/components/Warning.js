import React from 'react';
import { Alert } from 'antd';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

export default class Warning extends React.Component{
    render(){
        console.log(this.props.value);
        if (this.props.value.length) {
            return (
            <div>
                <Alert message={this.props.value.join(',')}
                    type="warning"
                    banner
                    closable
                    onClose={onClose}
                />
            </div>
            );
        } else {
            return(<div></div>);
        }
    }
}
