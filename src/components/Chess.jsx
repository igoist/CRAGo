import React from 'react';

class Chess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: this.props.flag
    }
    this.h = this.h.bind(this)
  }

  h() {
    // if (this.flag )
    this.setState({
      flag: !this.state.flag
    })
  }
  // handleChessClick

  render() {
    // let str = this.state.flag > 0 ? 'chess flag' : 'chess'
    let str;
    if (this.state.flag === 1) {
      str = 'chess black';
    } else if (this.state.flag === 2) {
      str = 'chess white';
    } else {
      str = 'chess';
    }
    return (
      <div className={str} onClick={this.h}>
      </div>
    )
  }
}

export default Chess