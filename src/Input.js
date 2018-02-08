import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <input
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;