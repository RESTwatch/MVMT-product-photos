import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App';
import Main from '../client/src/components/Main';
import Dots from '../client/src/components/Dots';

describe('Main component', () => {
  it('should display only the main image', () => {
    const wrapper = shallow(<Main />);
    const imgTags = wrapper.render().find('img');
    expect(imgTags).toHaveLength(2);
  })
});
