import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { LeftBar } from '../user/order/LeftBar';

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


describe('<LeftBar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const caterer = [{
                id: 3,
                name: "flash",
                business_name: "Crush"
            }]
            const catererMenu = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "meat"
            }]
            const getCatererMock = jest.fn()
            const getMealsMock = jest.fn()
            const wrapper = shallow(<LeftBar catererMenu={catererMenu} caterer={caterer} getMeals={getMealsMock} getCaterer={getCatererMock}/>);
            
        });
    });
});

describe('<LeftBar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const caterer = [{
                id: 3,
                name: "flash",
                business_name: "Food"
            }]
            const catererMenu = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "meat"
            }]
            const getCatererMock = jest.fn()
            const getMealsMock = jest.fn()
            const wrapper = mount(<LeftBar catererMenu={catererMenu} caterer={caterer} getMeals={getMealsMock} getCaterer={getCatererMock}/>);
            
        });
    });
});


describe('<LeftBar />', () => {
    describe('render()', () => {
        test('test select ', () => {
            const caterer = [{
                id: 3,
                name: "flash",
                business_name: "Food"
            }]
            const catererMenu = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "meat"
            }]
            const getCatererMock = jest.fn()
            const getCatererMenuMock = jest.fn()
            const getMealsMock = jest.fn()
            const wrapper = shallow(<LeftBar getCatererMenu={getCatererMenuMock} catererMenu={catererMenu} caterer={caterer} getMeals={getMealsMock} getCaterer={getCatererMock} />);
            
            expect(wrapper.find('#caterer').length).toEqual(1)

            wrapper.find('#caterer').simulate('change', {
                preventDefault: () => {
                },
                target: {

                }
            });

            expect(getCatererMenuMock.mock.calls.length).toEqual(1);
        });
    });
});

describe('<LeftBar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const caterer = [{
                id: 3,
                name: "flash",
                business_name: "Food"
            }]
            const catererMenu = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "meat"
            }]
            const getCatererMock = jest.fn()
            const getOrderMock = jest.fn()
            const getMealsMock = jest.fn()
            const wrapper = shallow(<LeftBar getOrder={getOrderMock} catererMenu={catererMenu} caterer={caterer} getMeals={getMealsMock} getCaterer={getCatererMock} />);

            expect(wrapper.find('MealItem').length).toEqual(1)
            wrapper.find('MealItem').prop('orderList')({ target: {} })

            expect(getOrderMock.mock.calls.length).toEqual(1);

        });
    });
});
