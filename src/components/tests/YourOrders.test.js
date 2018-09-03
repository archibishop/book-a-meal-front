import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Orders } from '../user/orders/YourOrders';

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


describe('<Orders />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const getMealsMock = jest.fn();
            const getOrdersMock = jest.fn();
            const getOrdersUserMock = jest.fn();
            
            const mealList= [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = shallow(<Orders mealList={mealList} getMeals={getMealsMock} getOrdersUser={getOrdersUserMock} getOrders={getOrdersMock} />);
            
        });
    });
});

describe('<Summary />', () => {
    describe('render()', () => {
        test('test delete button', () => {
            const getMealsMock = jest.fn();
            const getOrdersMock = jest.fn();
            const getOrdersUserMock = jest.fn();
            const deleteOrderMock = jest.fn();

            const mealList = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = shallow(<Orders deleteOrder={deleteOrderMock} mealList={mealList} getMeals={getMealsMock} getOrdersUser={getOrdersUserMock} getOrders={getOrdersMock} />);
            
            expect(wrapper.find('Modal').length).toEqual(2)
            expect(wrapper.find('button').length).toEqual(1)
            wrapper.find('button').simulate('click',{
                preventDefault: () => {
                }
            });

            expect(deleteOrderMock.mock.calls.length).toEqual(1);
            
        });
    });
});

describe('<Orders />', () => {
    describe('render()', () => {
        test('test form submission', () => {
            const getMealsMock = jest.fn();
            const getOrdersMock = jest.fn();
            const getOrdersUserMock = jest.fn();
            const updateOrderMock = jest.fn();

            const mealList = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = shallow(<Orders mealList={mealList} updateOrder={updateOrderMock} getMeals={getMealsMock} getOrdersUser={getOrdersUserMock} getOrders={getOrdersMock} />);

            expect(wrapper.find('Modal').length).toEqual(2)
            expect(wrapper.find('form').length).toEqual(1)
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                },
                target: {
                    meals: [{
                        meal: "millet"
                    }]
                }
            });

            expect(updateOrderMock.mock.calls.length).toEqual(1);
        });
    });
});
