import React, { Component } from 'react';

import Button from '../Button.js';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chores: ['dishes', 'laundry'],
      newItem: '',
      inProgress: ['stuff'],
      done: ['things']
    }
  }



  addToChores = (item, e) => {
    this.setState({
      chores: this.state.chores.concat([item]),
      newItem: ''
    })
  }

  handleEnter = e => {
    e.keyCode === 13 ? this.addToChores(this.state.newItem) : null;
  }
  
  removeFromChores = item => {
    const done = this.state.done
    const itemIndex = this.state.done.indexOf(item.chore);
    done.splice(itemIndex, 1)
    this.setState({
      done
    })
  }
  
  moveToInProgress = item => {
    const chores = this.state.chores;
    const itemIndex = this.state.chores.indexOf(item.chore);
    const inProgress = chores.splice(itemIndex, 1)
    this.setState({
      chores,
      inProgress: this.state.inProgress.concat([inProgress])
    })
  }
  
  moveToDone = item => {
    const inProgress = this.state.inProgress;
    const itemIndex = this.state.inProgress.indexOf(item.chore);
    const done = inProgress.splice(itemIndex, 1)
    this.setState({
      inProgress,
      done: this.state.done.concat([done])
    })
  }
  
  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      newItem: e.target.value
    })
  }

  preventDefault = event => {
    event.preventDefault();
  }
  
  startDrag = event => {
    console.log('hi', this.style)
    console.log('event', event.target)
    var data = {
      chore: event.target
    };
    event.dataTransfer.setData('text', data);
  }

  dragEnter = event => {
    event.target.classList.add('hover')
  }
  dragExit = event => {
    event.target.classList.remove('hover')
  }

  drop = event => {
    event.preventDefault();
    var data;
    try {
      data = event.dataTransfer.getData('text');
      console.log('data sent', data)
    } catch (e) {
      // If the text data isn't parsable we'll just ignore it.
      console.log('ignored')
      return;
    }
  }

  render() {
    const todoList = this.state.chores.map( (chore, key) => {
      return <li 
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.startDrag }
        onClick={ () => this.moveToInProgress({chore}) }>{ chore }</li>
    })
    const inProgress = this.state.inProgress.map( (chore, key) => {
      return <li 
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.startDrag }
        onClick={ () => this.moveToDone({chore}) }>{ chore }</li>
    })
    const done = this.state.done.map( (chore, key) => {
      return <li 
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.startDrag }
        onClick={ () => this.removeFromChores({chore}) }>{ chore }</li>
    })

    return (
      <div className="main-container">
        <ul className="flex">
          <li className="todo-items"><strong>TODO</strong></li>
          <li className="todo-items"><strong>IN PROGRESS</strong></li>
          <li className="todo-items"><strong>DONE</strong></li>
        </ul>
        <ul className="flex">
          <ul className="todo-list todo-items" onDragEnter={ this.dragEnter } onDragLeave={ this.dragExit }>
            { todoList }
          </ul>
          <ul className="in-progress todo-items" onDragEnter={ this.dragEnter } onDragLeave={ this.dragExit }>
            { inProgress }
          </ul>
          <ul className="done todo-items" onDragEnter={ this.dragEnter } onDragLeave={ this.dragExit }>
            { done }
          </ul>
        </ul>
        <div className="tasks" onDragOver={this.preventDefault} onDrop={this.drop}>
          Drop
        </div>
        <input
          onChange={ this.handleChange }
          value={ this.state.newItem } 
          onKeyDown={ this.handleEnter } />
        <Button
          text="add a new chore"
          handleClick={ () => this.addToChores(this.state.newItem) }
        />
      </div>
    );
  }
}

export default Todo;