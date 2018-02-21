import React, { Component } from 'react';
import Current from './Current.js';
import InProgress from './InProgress.js';
import Done from './Done.js';

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
  
  startDrag = event => {
    event.dataTransfer.setData('text', event.target.dataset.value);
    console.log('value: ', event.target.dataset.value);
    event.dataTransfer.effectAllowed = 'move';
  }

  hoverOff = event => {
    event.target.classList.remove('hover');
  }

  dragOver = event => {
    event.dataTransfer.dropEffect = 'move';
    event.preventDefault();
  }

  endDrag = event => {
    event.target.parentNode.removeChild(event.target);
  }

  enter = event => {
    event.target.tagName === 'UL' ? event.target.classList.add('hover') : event.target.style.pointerEvents = 'none';
    const items = event.dataTransfer.items;
    for (var i = 0; i < items.length; ++i) {
      if (items[i].kind == 'string' && items[i].type == 'text') {
        event.preventDefault();
        return;
      }
    }
  }

  drop = event => {
    console.log('The state in drop: ', this.state);
    const data = event.dataTransfer.getData('text');
    // const chore = document.createElement('li');
    // chore.textContent = data;

    // chore.setAttribute('data-value', data);
    // chore.setAttributeNS(null, 'class', 'clickable tasks exit-button');
    // chore.setAttribute('draggable', 'true');
    // chore.addEventListener('dragstart', this.startDrag);
    // chore.addEventListener('dragend', this.endDrag);

    // event.target.appendChild(chore);
    event.preventDefault();
    this.setState({
      chores: this.state.chores.push('carrot')
    })
    if (event.target.id === 'current') {
      this.setState({
        chores: this.state.chores.push(data)
      })
    }
    console.log('chores: ', this.state.chores)
  }

  render() {
    const todoList = this.state.chores.map( (chore, key) => {
      return <li
        data-value={chore}
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.startDrag }
        onDragEnd={ this.endDrag }
        onClick={ () => this.moveToInProgress({chore}) }>{ chore }</li>
    })
    const inProgress = this.state.inProgress.map( (chore, key) => {
      return <li
        data-value={chore}
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.startDrag }
        onDragEnd={ this.endDrag }
        onClick={ () => this.moveToDone({chore}) }>{ chore }</li>
    })
    const done = this.state.done.map( (chore, key) => {
      return <li
        data-value={chore}
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.startDrag }
        onDragEnd={ this.endDrag }
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
          <ul 
            id="todo-list"
            className="todo-items"
            onDragEnter={ this.enter }
            onDragOver={ this.dragOver }
            onDragLeave={ this.hoverOff }
            onDrop={ this.drop }>
            { todoList }
          </ul>
          <ul
            id="in-progress"
            className="todo-items"
            onDragEnter={ this.enter }
            onDragOver={ this.dragOver }
            onDragLeave={ this.hoverOff }
            onDrop={ this.drop.bind(this) }>
            { inProgress }
          </ul>
          <ul
            id="done"
            className="todo-items"
            onDragEnter={ this.enter }
            onDragOver={ this.dragOver }
            onDragLeave={ this.hoverOff }
            onDrop={ this.drop.bind(this) }>
            { done }
          </ul>
        </ul>
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