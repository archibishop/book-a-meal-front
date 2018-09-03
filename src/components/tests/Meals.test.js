import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Meals } from '../caterer/meals/Meals';

const mockStore = configureStore();
const initialState = {
    selectReducer: {
        selectedAvatar: 0,
    },
    getOrders: (x) => {
    },
    orders: [],
    user: [
        {
            message: 'HipHIP',
            error: null,
        }
    ],
};
const store = mockStore(initialState);


describe('<Meals />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const meals = [];
            const wrapper = shallow(<Meals meals={meals} />);
        });
    });
});

describe('<Meals />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const meals = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }];
            const wrapper = mount(<Meals meals={meals} />);
            expect(wrapper.find('MealTr').length).toEqual(1)
        });
    });
});
