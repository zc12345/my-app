import React from 'react';

import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;
//import Warning from './Warning'
const props = {
  name: 'file',
  multiple: true,
  showUploadList: false,
  action: '//jsonplaceholder.typicode.com/posts/',//文件上传地址
  accept:'*.pdf,*.doc,*.docx',//支持上传的文件格式
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },
};
const FileUpload = () =>{
    return (
  <div style={{ marginTop: 16, height: 180 }}>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">点击或者拖拽文件到本区域上传文件</p>
      <p className="ant-upload-hint">暂时只支持PDF或者word格式的文件上传</p>
    </Dragger>
  </div>
    );
}
export default FileUpload;