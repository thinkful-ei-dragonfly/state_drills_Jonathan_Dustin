import React from 'react';

class Bomb extends React.Component {

  state = {
    count: 0,
    message: '',
  }

  componentDidMount() {
      let interval = setInterval(()=> {
        this.setState({
          count: this.state.count +1,
        })
        this.handleCountUpdate(interval);
      }, 1000)
    }

  handleCountUpdate = (interval) => {
    if (this.state.count >=8) {
      this.setState({
        message: 'BOOM!!!',
      })
      clearInterval(interval);
    }
    else if (this.state.count % 2 === 0) {
      this.setState({
        message: 'tick',
      });
    }
    
    else {
      this.setState({
        message: 'tock',
      })
    }
  }

  render() {
    return <div>
      <p>{this.state.message}</p>
    </div>
  }
}

export default Bomb;