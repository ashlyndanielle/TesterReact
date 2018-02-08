import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button.js';
import PlayingWithState from './PlayingWithState/PlayingWithState.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColors: ["black", "purple", "blue", "green", "aliceblue"],
      position: 0
    }
  }

  render() {
    
    var buttonName = "I don't do anything";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Second Round
        </p>
        <Button 
          text={buttonName}
          color={this.state.backgroundColors[this.state.position]}
        />
        <PlayingWithState />
      </div>
    );
  }
}

export default App;