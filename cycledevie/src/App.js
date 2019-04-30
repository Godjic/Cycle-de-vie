import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Form />
          <img src={logo} style={{color:'red'}}className="App-logo" alt="logo" />
        </header>

      </div>
    );
  }
}

export default App;