import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
//将多个部分的reducer组合成一个
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;