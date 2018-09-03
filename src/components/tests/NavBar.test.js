import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../navs/NavBar';


describe('<Nav />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Nav />);
        });
    });
});
