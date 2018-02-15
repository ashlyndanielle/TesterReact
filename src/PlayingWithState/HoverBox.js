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
        width: '50px',
        height: '50px',
        borderRadius: '20px'
      },
      in: {
        backgroundColor: 'BurlyWood',
        boxShadow: '0px 0px 3px 1px rgba(0,0,0,0.2)'
      },
      out: {
        backgroundColor: 'darkcyan'
      }
    };

    return (
      <div className="container" align="center" style={{marginTop: '20px'}}>
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