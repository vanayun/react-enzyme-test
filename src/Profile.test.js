import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Profile username="vana" name="윤주경" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders username and name', () => {
    const wrapper = mount(<Profile username="vana" name="윤주경" />);
    expect(wrapper.props().username).toBe('vana');
    expect(wrapper.props().name).toBe('윤주경');

    const boldElement = wrapper.find('b');
    expect(boldElement.contains('vana')).toBe(true);
    const spanElement = wrapper.find('span');
    expect(spanElement.text()).toBe('(윤주경)');
  });
});
