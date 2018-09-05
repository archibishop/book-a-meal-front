import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MealDayTable } from '../caterer/menu/MealDayTable';

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


describe('<MealDayTable />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const menu = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const meals = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = shallow(<MealDayTable menu={menu} days={days} meals={meals}/>);
           
        });
    });
});

describe('<MealDayTable />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const menu = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const meals = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const wrapper = mount(<MealDayTable menu={menu} days={days} meals = { meals } />);
            
        });
    });
});


describe('<MealDayTable />', () => {
    describe('render()', () => {
        test('test create form submission', () => {
            const menu = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const meals = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const createMenuMock = jest.fn()
            const getMenuMock = jest.fn()
            let dates = ['4']
            const wrapper = shallow(<MealDayTable meals={meals} menu={menu} dates={dates} days={days} createMenu={createMenuMock} getMenu={getMenuMock}/>);

            expect(wrapper.find('form').length).toEqual(1)

            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                    
                },
                target: {
                    meals:{
                        selectedOptions: 1
                    },
                    day:{
                        value: 3
                    }
                    
                }
            });
            expect(createMenuMock.mock.calls.length).toEqual(1);
            expect(getMenuMock.mock.calls.length).toEqual(1);

        });
    });
});

describe('<MealDayTable />', () => {
    describe('render()', () => {
        test('test update form submission', () => {
            const menu = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const meals = [{
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]

            const days = [{
                val: 2,
                day: "Monday"
            }]
            const updateMenuMock = jest.fn()
            const getMenuMock = jest.fn()
            const createMenuMock = jest.fn()
            let dates = [{
                id: 1,
                day: 4
            }]
            const wrapper = shallow(<MealDayTable meals={meals} menu={menu} dates={dates} days={days} createMenu={createMenuMock} updateMenu={updateMenuMock} getMenu={getMenuMock} />);

            expect(wrapper.find('form').length).toEqual(1)

            wrapper.find('form').simulate('submit', {
                preventDefault: () => {

                },
                target: {
                    meals: {
                        selectedOptions: [9,5,6]
                    },
                    day: {
                        value: 4
                    }

                }
            });
            expect(updateMenuMock.mock.calls.length).toEqual(1);
            expect(getMenuMock.mock.calls.length).toEqual(1);
            
        });
    });
});

