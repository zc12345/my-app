let nextTodoId = 0;   //id counter,每次新增一个todo，先把nextTodo赋值给todo对象id，然后nextTodo自增，局部变量
//addTodo Action，传入值是text内容，返回值是对象
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
//声明一个setVisibilityFilter Action，根据filter过滤所要的内容
export const setVisibilityFilter = (filter)=>{
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
//声明一个toggleTodo Action,根据id值进行删除
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
//声明一个登录的Action
let username = null;
let userid = null;
let signed = false;
export const login = (user) =>{
  return {
    type: 'LOGIN',
    payload:{
      username,
      userid,
    }
  }
}
export const logout = (user) =>{
  return {
    type: 'LOGOUT',
    payload:{
      username,
      userid,
    }
  }
}