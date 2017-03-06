import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading : true,
      data : null
    };
  }
  componentDidMount() {
    $.get("test.json", function(data){
      console.log(data);
      var jsonText = JSON.stringify(data);
      var text = JSON.parse(jsonText);
      console.log(text[0].id);
    });
  }
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
