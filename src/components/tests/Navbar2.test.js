import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../navs/Navbar2';


describe('<Navbar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Navbar />);
        });
    });
});
