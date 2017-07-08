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
    this.setState({
      flag: !this.state.flag
    })
  }
  // handleChessClick

  render() {
    let str = this.state.flag > 0 ? 'chess flag' : 'chess'
    return (
      <div className={str} onClick={this.h}>
      </div>
    )
  }
}

export default Chess