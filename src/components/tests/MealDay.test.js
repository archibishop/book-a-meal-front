import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MealDay } from '../caterer/menu/MealDay';

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


describe('<MealDay />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const getMealsMock = jest.fn();
            const getDaysMock = jest.fn();
            const getCatererMenumMock = jest.fn();
            const getMenuDaysMock = jest.fn();

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = shallow(<MealDay getMeals={getMealsMock} getMenuDays={getMenuDaysMock} days={days} getCatererMenu={getCatererMenumMock} getDays={getDaysMock} />);
            
        });
    });
});

describe('<MealDay />', () => {
    describe('render()', () => {
        test('test select element', () => {
            const getMealsMock = jest.fn();
            const getDaysMock = jest.fn();
            const getMenuMock = jest.fn();
            const getCatererMenumMock = jest.fn();
            const getMenuDaysMock = jest.fn();

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = shallow(<MealDay getMenu={getMenuMock} getMenuDays={getMenuDaysMock} getMeals={getMealsMock} days={days} getCatererMenu={getCatererMenumMock} getDays={getDaysMock} />);
            
            expect(wrapper.find('#day').length).toEqual(1)

            wrapper.find('#day').simulate('change', {
                preventDefault: () => {
                },
                target: {
                    
                }
            });

            expect(getMenuMock.mock.calls.length).toEqual(1);
        });
    });
});

describe('<MealDay />', () => {
    describe('render()', () => {
        test('test button click', () => {
            const getMealsMock = jest.fn();
            const getDaysMock = jest.fn();
            const getMenuMock = jest.fn();
            const updateMenuMock = jest.fn();
            const getCatererMenumMock = jest.fn();
            const getMenuDaysMock = jest.fn();

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = shallow(<MealDay updateMenu={updateMenuMock} getMenuDays={getMenuDaysMock} meal_ids={meal_ids} getMenu={getMenuMock} getMeals={getMealsMock} days={days} getCatererMenu={getCatererMenumMock} getDays={getDaysMock} />);
            
            expect(wrapper.find('button').length).toEqual(1)

            const meal_ids = [1, 2, 3]
            wrapper.setState({ meal_ids })

            wrapper.find('button').simulate('click', {
                preventDefault: () => {
                },
                target: {

                }
            });
            
            expect(getMenuMock.mock.calls.length).toEqual(1);
            
        });
    });
});

describe('<MealDay />', () => {
    describe('render()', () => {
        test('Component will recieve props', () => {
            const getMealsMock = jest.fn();
            const getDaysMock = jest.fn();
            const getMenuMock = jest.fn();
            const updateMenuMock = jest.fn();
            const createMenuMock = jest.fn();
            const getCatererMenumMock = jest.fn();
            const getMenuDaysMock = jest.fn();

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = shallow(<MealDay createMenu={createMenuMock} getMenuDays={getMenuDaysMock} updateMenu={updateMenuMock} getMenu={getMenuMock} getMeals={getMealsMock} days={days} getCatererMenu={getCatererMenumMock} getDays={getDaysMock} />);
            
            expect(wrapper.find('button').length).toEqual(1)

            const menu = [{
                id: 2,
                user_id: 1,
                meal_ids: [1,2.3]
            }]

            wrapper.setProps({ menu })
        });
    });
});
