import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import login from './login';
//将多个部分的reducer组合成一个
const todoApp = combineReducers({
  login,
  todos,
  visibilityFilter
})

export default todoApp;