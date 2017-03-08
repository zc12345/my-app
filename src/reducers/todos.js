//reducer中的函数，大致内容是state+action=>nextState，可以在里面对数据进行处理，比如增删改查
const todo = (state = {}, action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)//遍历查找，依次调用上面定义的todo函数
        )
    default:
      return state;
  }
}

export default todos;