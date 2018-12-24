import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

describe('App', () => {
  it('should have a state for photos and currImg', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('photos')).toBe(true);
    expect(stateProps.hasOwnProperty('currImage')).toBe(true);
  });
});