import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { OrderSum } from '../caterer/orders/OrderSum';


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


describe('<OrderSum />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const orders = [];
            const wrapper = shallow(<OrderSum orders={orders} />);
            
        });
    });
});

describe('<OrderSum />', () => {
    describe('render()', () => {
        test('test child component is rendered', () => {
            const orders = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }];
            const wrapper = mount(<OrderSum orders={orders} />);
            expect(wrapper.find('OrderSumTr').length).toEqual(1)
            
        });
    });
});
