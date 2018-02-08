import React, { Component } from 'react';

export default class Button extends Component {
  render() {

    var color = this.props.color || "darkCyan";
    var buttonBackground = {
      backgroundColor: color
    }

    return (
        <button 
          className="effect7" 
          onClick={this.props.handleClick} 
          style={buttonBackground}
          >
          {this.props.text}
          <span className="icon-circle"></span>
        </button>
    )
  }
}