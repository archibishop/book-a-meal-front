import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { OrderSumTr } from '../caterer/orders/OrderSumTr';

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

describe('<OrderSumTr />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const orders = [];
            const wrapper = shallow(<OrderSumTr order={orders} />);
            
        });
    });
});

describe('<OrderSumTr />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const order = {
                meal_name: "flash",
                price: 6000
            }
            const wrapper = mount(<OrderSumTr order={order} />);
        });
    });
});

describe('< Summary />', () => {
    describe(' onSubmit ', () => {
        test('Test button click', () => {           
            const toggleBtnMock = jest.fn();
            const order = {
                id: 2,
                meal_name: "flash",
                price: 6000
            }
            const wrapper = mount(<OrderSumTr order={order} toggleBtn={toggleBtnMock} />);
            expect(wrapper.find('button').length).toEqual(1)

            wrapper.find('button').simulate('click', {
                preventDefault: () => {
                },
                target: {
                    
                }
            });

            expect(toggleBtnMock.mock.calls.length).toEqual(1);
        });
    });
});
