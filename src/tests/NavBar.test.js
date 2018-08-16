import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Nav from '../components/NavBar';


describe('<App />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Nav />);
            // const component = wrapper.dive();

            // expect(toJson(component)).toMatchSnapshot();
        });
    });
});
