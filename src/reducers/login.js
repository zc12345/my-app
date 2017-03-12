//reducer中的函数，大致内容是 state + action => nextState ，可以在里面对数据进行处理，比如增删改查
const login = (state = {}, action ) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        username: action.name,
        userid: action.id,
        signed: true
      }
    case 'LOGOUT':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        username: null,
        userid: null,
        completed: !state.signed
      })
    default:
      return state;
  }
}

export default login;