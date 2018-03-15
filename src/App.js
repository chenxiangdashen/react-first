import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Badge} from 'antd';
import Login from './views/login/index'

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
