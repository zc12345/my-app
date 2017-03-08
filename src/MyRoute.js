import React from 'react';

import {Router, Route, browserHistory} from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Table from './components/Table';
import Register from './components/Register';

export default class MyRoute extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/table' component={Table}/>
                </Route>
            </Router>
        );
    }
}