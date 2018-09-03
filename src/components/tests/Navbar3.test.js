import React from 'react';
import { shallow } from 'enzyme';
import Navb from '../navs/Navbar3';

describe('<Navb />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Navb />);
        });
    });
});
