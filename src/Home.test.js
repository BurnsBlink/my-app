import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Main />);
});







// const sum = require('./sum');
//
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// it('should handle the click event', () => {
//   window.alert = jest.fn();
//   const output = shallow(
//     <Home title="mockTitle" url="mockUrl" />
//   );
//   output.simulate('click');
//   expect(window.alert).toHaveBeenCalledWith('clicked');
// });
