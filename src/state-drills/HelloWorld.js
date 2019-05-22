import React from 'react';

class HelloWorld extends React.Component {

  state = {
    who: 'world',
  }

  handleClick = newString =>{
    this.setState({
      who: newString
    })
  }

  render() {
    return <div>
      <p>Hello, {this.state.who}</p>
      <button onClick={() => this.handleClick("World")} type="button">World</button>
      <button onClick={() => this.handleClick("Friend")} type="button">Friend</button>
      <button onClick={() => this.handleClick("React")} type="button">React</button>
      </div>
  }
}

export default HelloWorld;