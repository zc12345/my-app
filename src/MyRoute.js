import React from 'react';

import {Router, Route, browserHistory, hashHistory} from 'react-router';

import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Userinfo from './components/Userinfo';
import Upload from './components/FileUpload';
import Manage from './components/Manage';
import HomeworkList from './components/HomeworkList';
import Interview from './components/IntervieweeList';
import Home from './components/Home';

export default class MyRoute extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/user' component={User}>
                        <Route path='/userinfo' component={Userinfo}></Route>
                    </Route>
                    <Route path='/manage' component={Manage}>
                        <Route path='/interview' component={Interview}/>
                        <Route path='/homeworkList' component={HomeworkList}/>            
                    </Route>
                    <Route path='/home' component={Home}/>
                    <Route path='/upload' component={Upload}/>
                    <Route path="/*" component={Home} />
                </Route>
            </Router>
        );
    }
}