import React, { Component } from 'react';

import Input from '../Input.js';

class EventListeners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 20
    }
  }
  render() {

    const showState = () => {
      console.log(this.state.count);
    };

    return (
      <div>
        <Input 
          handleChange={showState}
        />
      </div>
    );
  }
}

export default EventListeners;
