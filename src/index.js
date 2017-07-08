import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rows = 10
const t = (x) => Math.floor((x * Math.random()))
const boxSize = rows * (32 + 6 * 2)

let arr = ((rows) => {
  let arr = []
  for (let i = 0; i < rows * rows; i++) {
    arr.push(t(100) % 2)
  }
  console.log(arr)
  return arr
})(rows)

console.log('finish arr initial: ' + arr)

ReactDOM.render(<App arr={arr} rows={rows} boxSize={boxSize} />, document.getElementById('root'));
registerServiceWorker();
