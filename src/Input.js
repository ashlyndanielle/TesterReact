import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Input;