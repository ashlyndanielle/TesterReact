import React, { Component } from 'react';

import Button from '../Button.js';

class PlayingWithProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: ['dishes', 'laundry'],
      newItem: ''
    }
  }

  addToChores = item => {
    this.setState({
      chores: this.state.chores.concat([item]),
      newItem: ''
    })
  }
  removeFromChores = item => {
    const itemIndex = this.state.chores.indexOf(item.chore);
    const chores = this.state.chores
    chores.splice(itemIndex, 1)
    this.setState({
      chores
    })
  }
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>Playing With Props</h3>
        { this.state.chores.map( (chore, key) => <li key={key} className="clickable" onClick={ () => this.removeFromChores({chore}) }>{ chore }</li>)}
        <input onChange={ this.handleChange } value={ this.state.newItem } />
        <Button
          text="add a new chore"
          handleClick={ () => this.addToChores(this.state.newItem) }
        />
      </div>
    );
  }
}

export default PlayingWithProps;