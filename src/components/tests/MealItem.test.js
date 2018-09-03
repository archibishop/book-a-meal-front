import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MealItem } from '../user/order/MealItem';

const mockStore = configureStore();
const initialState = {
    selectReducer: {
        selectedAvatar: 0,
    },
    getOrders: (x) => {
    },
    order: {
        meal_name: "flash",
        price: 6000
    },
    user: [
        {
            message: 'HipHIP',
            error: null,
        }
    ],
};
const store = mockStore(initialState);

describe('<MealItem />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const meal = {
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = shallow(<MealItem meal={meal} />);
        });
    });
});

describe('<MealItem />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const meal = {
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<MealItem meal={meal} />);
        });
    });
});

describe('<MealItem />', () => {
    describe(' onSubmit ', () => {
        test('test button click', () => {
            const orderListMock = jest.fn();
            const meal = {
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = shallow(<MealItem meal={meal} orderList={orderListMock} />);
            expect(wrapper.find('button').length).toEqual(1)

            wrapper.find('button').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(orderListMock.mock.calls.length).toEqual(1);
        });
    });
});


