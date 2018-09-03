import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MealDayTr } from '../caterer/menu/MealBayTr';


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


describe('<MealDayTr />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const menu = {
                id: 2,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = shallow(<MealDayTr menu={menu} />);
            
        });
    });
});

describe('<MealDayTr />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const menu = {
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<MealDayTr menu={menu} />);
            
        });
    });
});

describe('< MealDayTr />', () => {
    describe(' onSubmit ', () => {
        test('Test button click', () => {
           
            const toggleBtnMock = jest.fn();
            const menu = {
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<MealDayTr menu={menu} toggleBtn={toggleBtnMock}/>);
            expect(wrapper.find('.button').length).toEqual(1)

            wrapper.find('.button').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(toggleBtnMock.mock.calls.length).toEqual(1);
        });
    });
});

