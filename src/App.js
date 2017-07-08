import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Chess from './components/Chess'

class App extends Component {
  constructor(props) {
    super(props)
    this.arr = this.props.arr
    this.rows = this.props.rows
    this.boxSize = this.props.boxSize
    console.log(this.props.arr)
    this.handleChess = this.handleChess.bind(this)
  }

  handleChess(x, y) {
    let index = x * this.rows + y
    if (this.arr[index]) {
      this.arr[index] = 0
    } else {
      this.arr[index] = 1
    }
    console.log(this.arr[index])
  }

  render() {
    let inlineStyle = {
      width: this.boxSize + 'px',
      margin: '0 auto'
    }

    let rows = []

    for (let x = 0; x < this.props.rows; x++) {
      for (let y = 0; y < this.props.rows; y++) {
        let index = x * this.rows + y
        let f = this.arr[index] > 0 ? true : false 
        rows.push(<Chess id={index} flag={f} key={index.toString()} />)
      }
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="board" style={inlineStyle}>
          {rows}
        </div>
      </div>
    );
  }
}

export default App;
