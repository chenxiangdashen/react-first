import React, { Component } from 'react';
import './App.css';
import Login from './views/login/index'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './store'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Login></Login>
      </div>
    );
  }
}

export default App;
