import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import Main from '../client/src/components/Main';
import Dots from '../client/src/components/Dots';

describe('App', () => {
  it('should have a state for photos and currImg', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('photos')).toBe(true);
    expect(stateProps.hasOwnProperty('currImage')).toBe(true);
  });
  it("should render two components", () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(Dots)).toHaveLength(1);
  })
});