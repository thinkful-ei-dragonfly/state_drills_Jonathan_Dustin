import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Accordion Component', () => {
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
  
  it('renders the no sections by default', () => {
    const wrapper = shallow(<Accordion sections={[
      {
        title: 'Buddy',
        content: 'Hello, buddy!',
      },

      {
        title: 'Guy',
        content: `I'm not your buddy, guy!`,
      }
    ]} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens a clicked section', () => {
  const wrapper = shallow(<Accordion sections={[
    {
      title: 'Buddy',
      content: 'Hello, buddy!',
    },

    {
      title: 'Guy',
      content: `I'm not your buddy, guy!`,
    }
  ]} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens only last clicked section', () => {
    const wrapper = shallow(<Accordion sections={[
      {
        title: 'Buddy',
        content: 'Hello, buddy!',
      },
  
      {
        title: 'Guy',
        content: `I'm not your buddy, guy!`,
      }
    ]} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
    })

})
