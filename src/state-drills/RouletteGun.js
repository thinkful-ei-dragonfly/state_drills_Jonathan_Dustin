import React from 'react';

class RouletteGun extends React.Component {
  
  state = {
    chamber: null,
    spinningTheChamber: false,
    message: '',
  }

handleClick = e => {
  this.setState({
    spinningTheChamber: true,
    message:'spinning the chamber and pulling the trigger'
  })

  setTimeout(() => {
    let randomNum = Math.floor(Math.random()*8);
    this.setState({
      chamber: randomNum,
      spinningTheChamber: false,
    })
    if(this.state.chamber === this.props.bulletInChamber){
      this.setState({
        message: 'Bang!!!'
      })
    }
    else{
      this.setState({
        message: `you're safe`
      })
    }
  }, 2000)
}
  
  render(){
    return(
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Pull the trigger</button>
      </div>
    )
  }
}

export default RouletteGun;