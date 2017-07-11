import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Chess from './components/Chess'

class App extends Component {
  constructor(props) {
    super(props)
    this.rows = this.props.rows
    this.boxSize = this.props.boxSize
    console.log(this.props.arr)
    this.handleChess = this.handleChess.bind(this)
    // this.state = {
    //   chess: Array(this.rows * this.rows).fill(null),
    //   aIsNext: true,
    // }
    this.state = {
      history: [{
        chess: Array(this.rows * this.rows).fill(null),
      }],
      stepNumber: 0,
      aIsNext: true,
    }
  }

  handleChess(x, y) {
    // const history = this.state.history;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const chess = current.chess.slice();

    let index = x * this.rows + y
    chess[index] = this.state.aIsNext ? 'a' : 'b';
    this.setState({
      history: history.concat([{
        chess: chess,
      }]),
      stepNumber: history.length,
      aIsNext: !this.state.aIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      aIsNext: (step % 2) === 0,
    });
  }

  renderChess(i, x, y) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <Chess
        key={i.toString()}
        flag={current.chess[i]}
        onClick={() => this.handleChess(x, y)}
      />
    );
  }

  render() {
    let inlineStyle = {
      width: this.boxSize + 'px',
      margin: '0 auto'
    }
    // let rows = []
    // for (let x = 0; x < this.rows; x++) {
    //   for (let y = 0; y < this.rows; y++) {
    //     let index = x * this.rows + y
    //     // let f = this.arr[index] > 0 ? true : false 
    //     // rows.push(<Chess id={index} flag={this.arr[index]} key={index.toString()} />)
    //     // rows.push(<Chess id={index} flag={this.state.chess[index]} key={index.toString()} onClick={() => this.handleChess(x, y)} />)
    //     rows.push(this.renderChess(index, x, y))
    //   }
    // }
    // let rows = this.state.chess.map((v, i) => {
    //   return this.renderChess(i, parseInt(i / this.rows), i%this.rows)
    // })

    const history = this.state.history;
    const current = history[history.length - 1];

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move.toString()}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    let rows = current.chess.map((v, i) => {
      return this.renderChess(i, parseInt(i / this.rows), i%this.rows)
    })

    const status = 'Next player: ' + (this.state.aIsNext ? 'Black' : 'White');

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<h2>Welcome to React 欢迎来到 XXXの世界</h2>*/}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="board" style={inlineStyle}>
          {/*{rows}*/}
          {rows}
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
