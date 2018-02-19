import React, { Component } from 'react';
import './App.css';

import Button from './Button.js';
// import PlayingWithState from './PlayingWithState/PlayingWithState.js';
import Todo from './PlayingWithProps/Todo.js';

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
        <h2>Second Round</h2>
        <Button 
          text={buttonName}
          color={this.state.backgroundColors[this.state.position]}
        />
        {/* <PlayingWithState /> */}
        <Todo />
      </div>
    );
  }
}

export default App;