import React, { Component } from 'react';
import List from './List.js';

class PlayingWithProps extends Component {
  constructor(props){
    super(props);

    this.state = {
      players: {
        benched: ['mitros', 'brown', 'smith'],
        onCourt: ['nordstrom', 'flax', 'erickson']
      }
    }
  }

  moveToBench = (player, i) => {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    bench.push(court.splice(i, 1));
    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  moveToCourt = (player, i) => {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    court.push(bench.splice(i, 1));
    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }
  render() {
    return (
      <div className="main-container flex">
        <List title="On the Court" handleClick={ this.moveToBench } list={ this.state.players.onCourt } />
        <List title="Benched" handleClick={ this.moveToCourt } list={ this.state.players.benched } />
      </div>
    );
  }
}

export default PlayingWithProps;