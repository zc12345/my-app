import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import {createStore} from 'redux';
import todoApp from './reducers/reducers';
let store = createStore(
  todoApp,
 window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_() 
  )
import {addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters} from './actions/actions';
//log initial state
console.log(store.getState());

let unsubscribe = store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading : true,
      data : null
    };
  }
/*  componentDidMount() {
    $.get("test/test.json", function(data){
      console.log(data);
      var jsonText = JSON.stringify(data);
      var text = JSON.parse(jsonText);
      console.log(text[0].id);
    });
  }*/
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
