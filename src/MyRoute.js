import React from 'react';

import {Router, Route, browserHistory, hashHistory} from 'react-router';

import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Userinfo from './components/Userinfo';
import Upload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import HomeworkNotice from './components/HomeworkNotice';
import HomeworkHistory from './components/HomeworkHistory';
import MeetingNotice from './components/MeetingNotice';
import Manage from './components/Manage';
import HomeworkList from './components/HomeworkList';
import Interview from './components/IntervieweeList';
import FileList from './components/FileList';
import Checkin from './components/Checkin';
import MemberList from './components/MemberList';
import DeptList from './components/DeptList';
import AddDept from './components/AddDept';
import MeetingList from './components/MeetingList';
import IssueList from './components/IssueList';
import MeetingIssue from './components/MeetingIssue';
import HomeworkIssue from './components/HomeworkIssue';
import Home from './components/Home';

export default class MyRoute extends React.Component {
    render(){   
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/user' component={User}>
                        <Route path='/userinfo' component={Userinfo}/>
                        <Route path='/filedownload' component={FileDownload}/>
                        <Route path='/homeworkhistory' component={HomeworkHistory}/>
                        <Route path='/meetingnotice' component={MeetingNotice}/>
                        <Route path='/homeworknotice' component={HomeworkNotice}/>
                        <Route path='/upload' component={Upload}/>
                    </Route>
                    <Route path='/manage' component={Manage}>
                        <Route path='/interview' component={Interview}/>
                        <Route path='/memberlist' component={MemberList}/>
                        <Route path='/deptlist' component={DeptList}/>
                        <Route path='/adddept' component={AddDept}/>
                        <Route path='/homeworkList' component={HomeworkList}/>
                        <Route path='/filelist' component={FileList} />
                        <Route path='/meetinglist' component={MeetingList}/>
                        <Route path='/issuelist' component={IssueList}/> 
                        <Route path='/checkin' component={Checkin}/>
                        <Route path='/fileupload' component={Upload}/>
                        <Route path='/meetingissue' component={MeetingIssue}/>
                        <Route path='/homeworkissue' component={HomeworkIssue}/>
                    </Route>
                    <Route path='/home' component={Home}/>
                    <Route path='/upload' component={Upload}/>
                    <Route path="/*" component={Home} />
                </Route>
            </Router>
        );
    }
}