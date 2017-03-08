/**
 * 入口文件
 */

import React from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom'; 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';
import App from './components/App';
 
//App test component
//import App from './App';
import MyRoute from './MyRoute';

let store = createStore(todoApp,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);