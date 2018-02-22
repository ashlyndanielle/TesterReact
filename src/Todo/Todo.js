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
    const itemIndex = done.indexOf(item.chore);
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
    event.dataTransfer.effectAllowed = 'move';
  }

  dragLeave = event => {
    event.target.classList.remove('hover');
    console.log(event.target)
  }

  dragOver = event => {
    event.dataTransfer.dropEffect = 'move';
    event.preventDefault();
  }

  endDrag = event => {
    // try removing pointerEvents = 'none' here as well
    switch (event.target.parentNode.id) {
      case 'current':
        this.setState({
          chores: this.state.chores.filter( chore => {
            return chore !== event.target.innerHTML
          })
        });
        break;
      case 'in-progress':
        this.setState({
          inProgress: this.state.inProgress.filter( chore => {
            return chore !== event.target.innerHTML
          })
        });
        break;
      case 'done':
        this.setState({
          done: this.state.done.filter( chore => {
            return chore !== event.target.innerHTML
          })
        });
        break;
      default:
        null;
    }
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
    const data = event.dataTransfer.getData('text');
    const children = event.target.children;
    for ( let x = 0; x < children.length; x++ ) {
      children[x].style.pointerEvents = 'auto';
    }
    event.preventDefault();
    switch (event.target.id) {
      case 'current':
        this.setState({
          chores: this.state.chores.concat([data])
        });
        break;
      case 'in-progress':
        this.setState({
          inProgress: this.state.inProgress.concat([data])
        });
        break;
      case 'done':
        this.setState({
          done: this.state.done.concat([data])
        })
    }
  }

  renderTodoList = () => {
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
    return todoList;
  }

  renderInProgress = () => {
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
    return inProgress;
  }

  renderDone = () => {
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
    return done;
  }

  render() {

    return (
      <div className="main-container">
        <ul className="flex">
          <li className="todo-items"><strong>TODO</strong></li>
          <li className="todo-items"><strong>IN PROGRESS</strong></li>
          <li className="todo-items"><strong>DONE</strong></li>
        </ul>
        <ul className="flex">
          <ul 
            id="current"
            className="todo-items"
            onDragEnter={ this.enter }
            onDragOver={ this.dragOver }
            onDragLeave={ this.dragLeave }
            onDrop={ this.drop }>
            { this.renderTodoList() }
          </ul>
          <ul
            id="in-progress"
            className="todo-items"
            onDragEnter={ this.enter }
            onDragOver={ this.dragOver }
            onDragLeave={ this.dragLeave }
            onDrop={ this.drop }>
            { this.renderInProgress() }
          </ul>
          <ul
            id="done"
            className="todo-items"
            onDragEnter={ this.enter }
            onDragOver={ this.dragOver }
            onDragLeave={ this.dragLeave }
            onDrop={ this.drop }>
            { this.renderDone() }
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