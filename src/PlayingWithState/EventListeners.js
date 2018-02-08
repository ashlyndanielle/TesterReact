import React, { Component } from 'react';

import Input from '../Input.js';
import Button from '../Button.js';

class EventListeners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }
  render() {

    const updateUsername = e => {
      this.setState({
        username: e.target.value
      })
    }

    const updatePassword = e => {
      this.setState({
        password: e.target.value
      })
    }

    const handleLogin = () => {
      console.log(`username: ${this.state.username} and password: ${this.state.password}`);
      this.setState({
        username: '',
        password: ''
      })
    }

    return (
      <div>
        <Input 
          onChange={updateUsername}
          placeholder="username"
          value={this.state.username}
        />
        <Input
          onChange={updatePassword}
          placeholder="password"
          type="password"
          value={this.state.password}
        />
        <Button 
          text="login"
          handleClick={handleLogin}
        />
      </div>
    );
  }
}

export default EventListeners;
