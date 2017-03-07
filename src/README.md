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

# React相关文档

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
1. https://github.com/liuzhenangel/react-ruby-china
2. https://github.com/mking/react-hn#setup

## Redux篇
1. react,flux,redux关系简介 http://www.tuicool.com/articles/FfeiiiQ
2. react,flux,redux关系简介 http://www.tuicool.com/articles/3AFJNbj
3. 数据流管理架构之Redux介绍 http://www.alloyteam.com/2015/09/react-redux/
4. 官方文档 http://redux.js.org/
5. 深入理解redux http://www.jianshu.com/p/0e42799be566

## Router篇
1. react-router路由实践 http://blog.csdn.net/xingaichenai/article/details/52304851?locationNum=3&fps=1
2. Github文档 https://github.com/ReactTraining/react-router
3. 阮一峰教程 http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

## Ajax请求篇
1. 
2. 

# RxJS相关文档
1. RxJS简介 http://www.tuicool.com/articles/iYv2qiR
2. RxJS API http://reactivex.io/rxjs/
3. RxJS API 解析http://www.tuicool.com/articles/MfEru2Q
4. 使用RxJS实现JS的reactive编程 http://www.oschina.net/translate/rxjs-streams
5. Github文档 https://github.com/Reactive-Extensions/RxJS

# 接口
1. 登录 login(id,password) 登出 logout
2. 注册 register(1.请求服务器发token，获取属性是newToken(String) 2.提交表单，表单序列化，属性(token,id,birthday,name,password,repassword,QQ,phoneNumber,gender))
3. 面试 intervieweeCheck(提交面试通过的人，参数字符串数组，内容是通过者id，passedIDs[]) intervieweeGet(获取还未面试的人员，传送无参，空json对象，得到的是对象数组，展示：学号，简介，姓名，年龄)
