import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { OrderItem } from '../user/order/OrderItem';

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


describe('<OrderItem />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const order = {
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = shallow(<OrderItem order={order} />);
            
        });
    });
});

describe('<OrderItem />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const order = {
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<OrderItem order={order} />);
            
        });
    });
});

describe('<OrderItem />', () => {
    describe(' onSubmit ', () => {
        test('test order delete', () => {
            const orderDeleteMock = jest.fn();
            const order = {
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = shallow(<OrderItem order={order} orderDeleteByName={orderDeleteMock} />);
            expect(wrapper.find('.buttonx').length).toEqual(1)

            wrapper.find('.buttonx').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(orderDeleteMock.mock.calls.length).toEqual(1);
        });
    });
});


