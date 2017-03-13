import React from 'react';
import { Alert } from 'antd';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};
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
                {errors.map(item =>
                <Alert message={item}
                    type="warning"
                    banner
                    closable
                    onClose={onClose}
                />
                )}
            </div>
            );
        } else {
            return(<div></div>);
        }
    }
}
