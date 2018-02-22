import React, { Component } from 'react';
import { getLukeSkywalker } from '../services/starWars'

class HttpRequest extends Component {
  constructor(props){
    super(props);
    this.state = {
      luke: {}
    }
  }

  componentDidMount() {
    getLukeSkywalker().then( luke => {
      this.setState({
        luke
      })
    })
  }
  render() {
    const { luke } = this.state;
    return (
      <div className="main-container">
        <h4>HTTP</h4>
        <br/>
        <p><strong>Name: </strong>{ luke.name }</p>
        <p><strong>Height: </strong>{ luke.height }</p>
        <p><strong>Mass: </strong>{ luke.mass }</p>
      </div>
    );
  }
}

export default HttpRequest;