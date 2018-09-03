import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedOrder, { Order } from '../user/order/Order';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();
const initialState = {
    selectReducer: {
        selectedAvatar: 0,
    },
    getOrders: (x) => {
    },
    getMeals: () => {
    },
    order: {
        meal_name: "flash",
        price: 6000
    },
    meals: [{
        meal_name: "beef",
        price: 6000
    }, {
            meal_name: "meat",
            price: 6000
        }],
    orderInfo: '',    
    user: [
        {
            message: 'HipHIP',
            error: null,
        }
    ],
};
const store = mockStore(initialState);


describe('<Order />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const getMealsMock = jest.fn()
            const wrapper = shallow(<Order getMeals={getMealsMock} />);
        });
    });
});

describe('<Order />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const getMealsMock = jest.fn()
            const wrapper = shallow(
                <MemoryRouter>
                    <ConnectedOrder getMeals={getMealsMock} store={store}/>
                </MemoryRouter>
            ).dive();
            
        });
    });
});

describe('<Order />', () => {
    describe('render()', () => {
        test('test props are triggered', () => {
            const getMealsMock = jest.fn()
            const wrapper = shallow(<Order getMeals={getMealsMock} />);
            expect(wrapper.find('Connect(LeftBar)').length).toEqual(1)
            wrapper.find('Connect(LeftBar)').prop('getOrder')({ target: {} })

        });
    });
});

describe('<Order />', () => {
    describe('render()', () => {
        test('Delete prop is triggered', () => {
            const getMealsMock = jest.fn()
            const wrapper = shallow(<Order getMeals={getMealsMock} />);
            expect(wrapper.find('RightBar').length).toEqual(1)
            wrapper.find('RightBar').prop('deleteOrder')({ target: {} })
            
        });
    });
});

describe('<Order />', () => {
    describe('render()', () => {
        test('Add props triggered', () => {
            const getMealsMock = jest.fn()
            const wrapper = shallow(<Order getMeals={getMealsMock} />);
            expect(wrapper.find('RightBar').length).toEqual(1)
            wrapper.find('RightBar').prop('handleAddOrder')({
                orders: [{
                    meal_name: "Matooke"
                }] })
            
        });
    });
});

describe('<Order />', () => {
    describe('render()', () => {
        test('test clear list prop', () => {
            const getMealsMock = jest.fn()
            const wrapper = shallow(<Order getMeals={getMealsMock} />);
            expect(wrapper.find('RightBar').length).toEqual(1)
            wrapper.find('RightBar').prop('clearList')({ target: {} })
            
        });
    });
});

