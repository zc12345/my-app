/**
 * created by zc12345
 * date: 03/04/2017
 * time: 
 * description: 本组件的作用是test
 */
import React from 'react';

import 'normalize.css/normalize.css';
import 'antd/dist/antd.css';

import { Button } from 'antd';

class Test extends React.Component {
  render() {
    return (
        <Button>Hello</Button>
    );
  }
}
Test.defaultProps = {
};
export default Test;
