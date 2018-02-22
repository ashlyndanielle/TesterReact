import React, { Component } from 'react';
import './App.css';

import Button from './Button.js';
import PlayingWithState from './PlayingWithState/PlayingWithState.js';
import PlayingWithProps from './PlayingWithProps/PlayingWithProps.js';
import Todo from './Todo/Todo.js';
import HttpRequest from './HttpRequest/HttpRequest.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColors: ["DarkCyan", "black", "purple", "blue", "green", "aliceblue"],
      position: 0
    }
  }

  render() {
    
    var buttonName = "I don't do anything";

    return (
      <div className="App">
      <h2>Tester React App</h2>
      <HttpRequest />  
      <PlayingWithProps />
      <div className="main-container">
        <Button
          text={buttonName}
          color={this.state.backgroundColors[this.state.position]}
        />
      </div>
      <PlayingWithState />
      <Todo />
      </div>
    );
  }
}

export default App;