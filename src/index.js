import React from 'react';
import ReactDOM from 'react-dom'; 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Test from './components/Test';
import MyRoute from './MyRoute';

import './styles/index.css';

//打开redux devtool
//可以把第二个参数作为一个const值传入
//let store = createStore(MyRoute,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//也可以把render直接import进来之后作为一个当前组件函数调用
//甚至还可以把要渲染的部分mountNode也作为一个const值传入，如`const mountNode = document.getElementById('root');`
ReactDOM.render(
  <MyRoute />, 
  document.getElementById('root')
);