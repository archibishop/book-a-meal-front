import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../caterer/meals/Dashboard';
import { MemoryRouter } from 'react-router-dom';

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


describe('<Dashboard />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const getMealssMock = jest.fn();
            const meals = [];
            const wrapper = shallow(<Dashboard meals={meals} getMeals={getMealssMock} />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});

describe('<Dashboard />', () => {
    describe('render()', () => {
        test('test delete button works', () => {
            const getMealssMock = jest.fn();
            const deleteMealMock = jest.fn();
            const meals = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }];
            const wrapper = mount(
                <MemoryRouter>
                    <Dashboard mealList={meals} getMeals={getMealssMock} deleteMeal={deleteMealMock}/>
                </MemoryRouter>
                );
            expect(wrapper.find('Meals').length).toEqual(1)

            wrapper.find('MealTr').prop('toggleEdit')({ target: {} })
            wrapper.find('MealTr').prop('toggleDelete')({ target: {} })
            // const component = wrapper.dive();

            let isOpen = true
            wrapper.setProps({ isOpen })
            expect(wrapper.find('Modal').length).toEqual(3)
            expect(wrapper.find('#btn-delete').length).toEqual(1)
            wrapper.find('#btn-delete').simulate('click');
            expect(deleteMealMock.mock.calls.length).toEqual(1);

            
        });
    });
});


describe('<Dashboard />', () => {
    describe('render()', () => {
        test('expects Modals rendered', () => {
            const getMealssMock = jest.fn();
            const addMealMock = jest.fn();
            const meals = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }];
            const wrapper = mount(
                <MemoryRouter>
                    <Dashboard mealList={meals} getMeals={getMealssMock} addMeal={addMealMock} />
                </MemoryRouter>
            );
            expect(wrapper.find('Meals').length).toEqual(1)

            wrapper.find('MealTr').prop('toggleEdit')({ target: {} })
            wrapper.find('MealTr').prop('toggleDelete')({ target: {} })

            let isOpen1 = true
            wrapper.setProps({ isOpen1 })
            expect(wrapper.find('Modal').length).toEqual(3)
        });
    });
});

describe('<Dashboard />', () => {
    describe('render()', () => {
        test('form submissions work', () => {
            const getMealssMock = jest.fn();
            const updateMealMock = jest.fn();
            const addMealMock = jest.fn();
            const meals = [];
            const wrapper = shallow(<Dashboard meals={meals} getMeals={getMealssMock} addMeal={addMealMock} updateMeal={updateMealMock}/>);
            // const component = wrapper.dive();


            let isOpen1 = true
            wrapper.setProps({ isOpen1 })

            expect(wrapper.find('Modal').length).toEqual(3)
            expect(wrapper.find('form').length).toEqual(2)
            expect(wrapper.find('#form-edit').length).toEqual(1)
            expect(wrapper.find('#form-add').length).toEqual(1)

            wrapper.find('#form-add').simulate('submit', {
                preventDefault: () => {
                },
                target: {
                    elements : {
                    firstname: {
                        value: "Fast foods"
                    },
                    lastname: {
                        value: "JOHNNY"
                    },
                    country: {
                        value: "123456"
                    }
                }
                }
            });
            expect(addMealMock.mock.calls.length).toEqual(1);

            wrapper.find('#form-edit').simulate('submit', {
                preventDefault: () => {
                },
                target: {
                    elements: {
                        firstname: {
                            value: "Fast foods"
                        },
                        lastname: {
                            value: "JOHNNY"
                        },
                        country: {
                            value: "123456"
                        }
                    }
                }
            });
            expect(updateMealMock.mock.calls.length).toEqual(1);

            wrapper.find('.button-add').simulate('click', {
                preventDefault: () => {
                }
            });
        });
    });
});

