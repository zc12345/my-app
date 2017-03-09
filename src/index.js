import React from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom'; 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';
import App from './components/App';
 
//App test component
import TApp from './App';
import MyRoute from './MyRoute';

//打开redux devtool
//可以把第二个参数作为一个const值传入
let store = createStore(todoApp,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//也可以把render直接import进来之后作为一个当前组件函数调用
//甚至还可以把要渲染的部分mountNode也作为一个const值传入，如`const mountNode = document.getElementById('root');`
ReactDOM.render(
  <Provider store={store}>
    <MyRoute />
  </Provider>, 
  document.getElementById('root')
);