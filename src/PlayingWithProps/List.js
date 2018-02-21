import React, { Component } from 'react';

export default function List(props) {
  /*
  * PROPS
  * 1. title {string} to be displayed
  * 2. handleClick {function}
  * 3. list {Array<string>} list of strings to be displayed
  */

  const list = props.list.map((item, i) => {
    return <li className="clickable" key={i} onClick={ () => props.handleClick(item, i) }>{item}</li>
  })
    return (
      <div className="spacer">
        <h4>{props.title}</h4>
        <ul>
          {list}
        </ul>
      </div>
    );
}
