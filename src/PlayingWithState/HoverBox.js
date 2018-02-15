import React, { Component } from 'react';

class HoverBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxState: 'out'
    }
  }

  changeColor = () => {
    this.setState({
      boxState: 'in'
    })
  }
  resetColor = () => {
    this.setState({
      boxState: 'out'
    })
  }

  render() {

    const styles = {
      box: {
        width: '100px',
        height: '100px',
        borderRadius: '20px'
      },
      in: {
        backgroundColor: 'lightcyan'
      },
      out: {
        backgroundColor: 'darkcyan'
      }
    };

    return (
      <div align="center" style={{marginTop: '40px'}}>
        <div
          style={ {...styles.box, ...styles[this.state.boxState]} } 
          onMouseEnter={ this.changeColor }
          onMouseLeave={ this.resetColor }
        ></div>
      </div>
    );
  }
}

export default HoverBox;