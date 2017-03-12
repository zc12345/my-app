import React from 'react';
import { Alert } from 'antd';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};
//目前的做法是把所有的返回error放在顶部一行上面，等待后期的改进
export default class Warning extends React.Component{
    render(){
        console.log(this.props.value);
        let fieldErrors = this.props.value;
        let errors = [];
        for (let key in fieldErrors) {
            errors.push(fieldErrors[key]);
        }
        if (this.props.value.length) {
            return (
            <div>
                <Alert message={errors}
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
