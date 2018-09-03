import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MealTr } from '../caterer/meals/MealTableRow';

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


describe('<MealTr />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const meal = {
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = shallow(<MealTr meal={meal} />);
        });
    });
});

describe('<MealTr />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const meal = {
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<MealTr meal={meal} />);
        });
    });
});

describe('<MealTr />', () => {
    describe(' onSubmit ', () => {
        test('Edit ', () => {
            const toggleBtnMock = jest.fn();
            const meal = {
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<MealTr meal={meal} toggleEdit={toggleBtnMock} />);
            expect(wrapper.find('.button-edit').length).toEqual(1)

            wrapper.find('.button-edit').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(toggleBtnMock.mock.calls.length).toEqual(1);
        });
    });
});


describe('< Summary />', () => {
    describe(' onSubmit ', () => {
        test('Remove ', () => {
            const baseProps = {
                // whatever fake props you want passed to the component
                // ...
                signup: jest.fn(),
            }
            const toggleBtnMock = jest.fn();
            const meal = {
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }
            const wrapper = mount(<MealTr meal={meal} toggleDelete={toggleBtnMock} />);
            expect(wrapper.find('.button').length).toEqual(1)

            wrapper.find('.button').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(toggleBtnMock.mock.calls.length).toEqual(1);
        });
    });
});
