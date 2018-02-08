import React, { Component } from 'react';

export default class Button extends Component {
  render() {

    var buttonBackground = {
      backgroundColor: this.props.color
    }

    return (
      <div>
        <button 
          className="effect7" 
          onClick={this.props.handleClick} 
          style={buttonBackground}
          >
          {this.props.text}
          <span className="icon-circle"></span>
        </button>
      </div>
    )
  }
}