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

    const changeColor = () => {
      var newPosition = this.state.position;
      this.state.position === 5 ? newPosition = 0 : newPosition++;
      this.setState({
        position: newPosition
      })
    }
    
    var buttonName = "I am a button!";

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
          handleClick={changeColor}
          color={this.state.backgroundColors[this.state.position]}
        />
        <PlayingWithState />
      </div>
    );
  }
}

export default App;