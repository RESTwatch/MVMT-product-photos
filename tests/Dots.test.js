import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App';
import Main from '../client/src/components/Main';
import Dots from '../client/src/components/Dots';

describe('Dots component', () => {
  it('should render 5 images for each watch', () => {
    const wrapper = shallow(<Dots photos={{}} />);
    expect(wrapper.render().find('img')).toHaveLength(5);
  })
});
