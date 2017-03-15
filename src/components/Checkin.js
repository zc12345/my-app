import React from 'react';
import QRCode from 'qrcode.react';
import Warning from './Warning';
import $ from 'jquery';
import { Select } from 'antd';
const Option = Select.Option;

export default class Checkin extends React.Component{
    state = {
        deptID:null, 
        times:null, 
        url:"http://"+location.host+"/memberSign?token="
    }
    handleChangeDept = (value) => {
        this.setState({deptID : value});
        console.log(value);
    }
    handleChangeTimes = (value) => {
    //console.log(`selected ${value}`);
        this.setState({times : value});
        $.post("refreshQRCode", {
            deptID: this.state.deptID,
            times: this.state.times
        },function(json) {
            $.each(json.actionMessages,function(index,data){
                let token=null;
                token=data;
                if (token !== null){
                    //修改，给url中添加部门id属性和签到次数属性
                    this.setState({url:this.state.url+token+"&deptID="+this.state.deptID+"&amptimes="+this.state.times});//url中直接写 &times 会被解析为x，因此用&amp 作为 &
                }
                else {
                    let warning = {error:'获取二维码失败'}
                    return (<Warning value={warning}/>);
                }
            });
        });
    }
    render() {
        return (
            <div>
                <center>
                <div>
                    部门
                    <Select defaultValue="java" style={{ width: 120,padding:'20px' }} onChange={this.handleChangeDept}>
                    <Option value="C++">C++</Option>
                    <Option value="python">python</Option>
                    <Option value="java">java</Option>
                    </Select>
                    例会次数
                    <Select defaultValue="1" style={{ width: 120,padding:'20px' }} id="times" onChange={this.handleChangeTimes}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    </Select>    
                </div>
                <QRCode style={{padding: '20px' }}
                    value={this.state.url}
                    level='H'
                />
                </center>
            </div>
        );
    }
}
