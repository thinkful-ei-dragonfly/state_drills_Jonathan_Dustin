import React from 'react';

class Accordion extends React.Component{
  static defaultProps = {sections: []}

  state = {
    currentSectionIndex: null,
  }

  handleClick = (index) => {
    this.setState({
      currentSectionIndex: index,
    })
  }

 
  
  renderSections(item, index){
   
      return (
      <li key={index}>
        <button  onClick={() => this.handleClick(index)}>
        {item.title}
        </button>
        {(this.state.currentSectionIndex === index) && <p>{item.content}</p>}
      </li>)
    }
  

  render(){

    return (
    <ul>
      {this.props.sections.map((item,index) => 
        this.renderSections(item, index)
      )}
    </ul>)
  }
}

export default Accordion;