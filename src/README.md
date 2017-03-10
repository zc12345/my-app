# 记录当前工程的进度和问题，有用的文档资料

# 03/06/2017
## 本周的任务
1. 完成所有页面的外观设计
2. 完成所有页面的基本功能
3. 完成页面与后端的交互测试

## 下午的进度
1. 问铮爷关于发送请求的问题，铮爷让我去看RxJS，后来看明白了，这是处理异步请求的方法
2. 学习了基本的通过ajax获取数据的办法
3. 明白了.gitignore这种东西存在的重要性
4. 得到了后端的登录，注册，面试页面的接口

# 03/07/2017
## 今天的任务
1. 读关于redux的文档，了解运作原理
2. 使用测试json文件进行简单的登录注册测试

## redux 设计预备
1. 一个对象要存储的内容

# 03/08/2017
## 今天的任务
1. 建立起reducer和store
2. 面试页面的逻辑部分
3. login和register对于ajax传回的错误信息进行处理
4. login和register的表单验证

## 关于前后端分离的交互部分
1. 查了网上的资料，提到有跨域访问的话可以使用代理
2. 之前老师也提到过可以用两种方法实现前后端交互，一种是把两个服务器放在一个域内，作为两个子域；另一种方法是使用代理
3. 但是现在还是不是很清楚的部分是ajax请求发送过去之后是谁接收呢？后端部分自己使用了一个类似分发的东西，那前端发过去的请求能不能被接收到呢？
4. 而网上所谓的跨域访问是因为前后端使用的服务器不同，前端如果是nodejs，端口是`localhost:3000`，后端使用tomcat，端口号是8080，这种时候会出现跨域访问；或者一个是网上服务器，一个是本地服务器，发出请求会出现跨域
5. 很清晰的一点是，前后端只有数据交互，没有别的内容，前后端不能对对方进行控制操作

## 关于react-redux
1. 现在好像对于react-redux的层次有一点明白了
2. 首先是包了一层provider，然后从store里面取状态，状态是所有组件都可得到的state值，router进行分发，action定义操作接口，reducer进行具体业务逻辑的定义，如果要增加操作的话可以使用中间层
3. 但是，但是map是放在哪里呢？action吗？刚刚查了一下，是放在组件内，但是不知道是只能在app组件还是都可以

# 03/09/2017
## 关于componentWillMount()
1. 现在的思路是在componentWillMount()时候加入ajax，然后进行获取数据进行渲染，但是问题是console.log()能够打印出来数据，但是render渲染的时候没有显示，为什么呢？
## 解决掉的几个问题
1. 注册页面的一个小bug解决掉了，原来是没有把confirm改成repassword
2. 表格管理页面的数据加载解决了，一开始是因为没有使用状态state存储，后来是因为没有绑定this

## 没解决的几个问题
1. 还是没能搞定redux，真的有点绝望，还有一个星期，真的能完成吗
2. 我感觉自己进度越来越慢，好像一天也没能完成什么工作，真的有点茫然

# 03/10/2017
## 关于今天解决的问题
1. 登录注册的正则表达式验证搞定了，下面还欠缺的是生日格式的问题和返回信息的提示
2. 

# React开发过程参考的相关文档

## 入门篇
1. 阮一峰 React 入门教程实例  http://www.ruanyifeng.com/blog/2015/03/react.html
2. 官方文档 https://facebook.github.io/react/tutorial/tutorial.html
3. react资源汇总帖 http://www.imooc.com/article/14902
4. react中文社区 http://react-china.org/
5. create-react-app文档 https://github.com/facebookincubator/create-react-app

## UI库
1. https://ant.design
2. http://www.material-ui.com

## 相关实践
1. ruby中文社区镜像https://github.com/liuzhenangel/react-ruby-china
2. 新闻类 https://github.com/mking/react-hn#setup

## Redux篇
1. react,flux,redux关系简介 http://www.tuicool.com/articles/FfeiiiQ
2. react,flux,redux关系简介 http://www.tuicool.com/articles/3AFJNbj
3. 数据流管理架构之Redux介绍 http://www.alloyteam.com/2015/09/react-redux/
4. 官方文档 http://redux.js.org/
5. 深入理解redux http://www.jianshu.com/p/0e42799be566
6. 阮一峰教程 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

## Router篇
1. react-router路由实践 http://blog.csdn.net/xingaichenai/article/details/52304851?locationNum=3&fps=1
2. Github文档 https://github.com/ReactTraining/react-router
3. 阮一峰教程 http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

## Ajax请求篇
1. fetch发送请求 https://segmentfault.com/n/1330000008597077?token=85d4b15986e26d1b35c9885f2fbff1e1
2. ajax加载数据 http://www.css88.com/react/tips/initial-ajax.html
3. ajax获取数据实例 http://liuxinxiu.com/React_Ajax_setState_Render_UI_ES6/
4. ajax提交表单 http://www.cnblogs.com/zhuxiaojie/p/4783939.html

## 前后端交互篇
1. 如何解决跨域问题 http://react-china.org/t/topic/7258
2. 淘宝前后端分离实践思考 http://frontenddev.org/column/taobao-full-stack-development/
3. react native 采用fetch发送跨域请求 http://blog.csdn.net/u012620506/article/details/52346264
4. 前后端交互实践 http://www.cnblogs.com/acoder2013/p/5060498.html

# RxJS相关文档
1. RxJS简介 http://www.tuicool.com/articles/iYv2qiR
2. RxJS API http://reactivex.io/rxjs/
3. RxJS API 解析http://www.tuicool.com/articles/MfEru2Q
4. 使用RxJS实现JS的reactive编程 http://www.oschina.net/translate/rxjs-streams
5. Github文档 https://github.com/Reactive-Extensions/RxJS

# 接口
1. 登录 login(id,password) 登出 logout
2. 注册 register(1.请求服务器发token，获取属性是newToken(String) 2.提交表单，表单序列化，属性(token,id,birthday,name,password,repassword,QQ,phoneNumber,gender))
3. 面试 intervieweeCheck(提交面试通过的人，参数字符串数组，内容是通过者id，passedIDs[]) intervieweeGet(获取还未面试的人员，传送无参，空json对象，得到的是对象数组，展示：学号，简介，姓名，年龄)在注册界面要添加一个属性 description(个人简介),限制300字内
4. 作业管理 
homeWorkID {Department: dept, int times, Member homeWorkSubmitter}
5. 接口列表
- 注册：register
- 作业管理：homeworkManagement
- 签到：memberSign
- 部门添加成员：addMember
- 修改密码：changePassword
- 获取当前部门的成员：fetchAllPerson
- 删除成员：deletePersonSubmit
- 重置密码：resetPasswordSubmit
- 修改成员信息：modifyInfo
