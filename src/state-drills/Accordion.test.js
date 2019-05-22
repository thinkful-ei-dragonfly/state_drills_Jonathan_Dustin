import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';


describe('Bomb Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Accordion sections={[
        {
          title: 'Buddy',
          content: 'Hello, buddy!',
        },

        {
          title: 'Guy',
          content: `I'm not your buddy, guy!`,
        }
      ]
      } />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
  
  it('renders an empty li when sections prop is not supplied', () => {
    const tree = renderer
      .create(<Accordion />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
  
  it('renders no sections as active by default', () => {
    
  })
})