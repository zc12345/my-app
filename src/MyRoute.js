import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory, browserHistory} from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

export default class MyRoute extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/*' component={Home}/>
                </Route>
            </Router>
        );
    }
}