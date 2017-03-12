import React from 'react';

import {Router, Route, browserHistory, hashHistory} from 'react-router';

import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/User';
import Manage from './components/Manage';
import HomeworkList from './components/HomeworkList';
import Interview from './components/IntervieweeList';

export default class MyRoute extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/home' component={Home}>
                        <Route path='/user' component={User}></Route>
                    </Route>
                    <Route path='/manage' component={Manage}>
                        <Route path='/interview' component={Interview}/>
                        <Route path='/homeworkList' component={HomeworkList}/>            
                    </Route>
                    <Route path="/*" component={Login} />
                </Route>
            </Router>
        );
    }
}