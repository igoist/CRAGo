import React from 'react';

class Chess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: this.props.flag
    }
  }

  render() {
    let str;
    if (this.props.flag == 'a') {
      str = 'chess black';
    } else if (this.props.flag == 'b') {
      str = 'chess white';
    } else {
      str = 'chess';
    }
    return (
      <div className={str} onClick={() => this.props.onClick()}>
      </div>
    )
  }
}

export default Chess