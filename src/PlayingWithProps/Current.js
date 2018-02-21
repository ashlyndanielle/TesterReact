import React, { Component } from 'react';

class Current extends Component {
  render() {
    const currentList = this.props.chores.map( (chore, key) => {
      return <li
        data-value={chore}
        key={key}
        className="clickable tasks exit-button"
        draggable='true'
        onDragStart={ this.props.startDrag }
        onDragEnd={ this.props.endDrag }
        onClick={ () => this.props.moveToInProgress({chore}) }>{ chore }</li>
    })

    return (
      <ul
        id="current"
        className="todo-items"
        onDragEnter={ this.props.enter }
        onDragOver={ this.props.dragOver }
        onDragLeave={ this.props.hoverOff }
        onDrop={ this.props.drop }>
        { currentList }
      </ul>
    );
  }
}

export default Current;