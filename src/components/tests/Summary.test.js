import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Summary } from '../caterer/orders/Summary';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();
const initialState = {
    selectReducer: {
        selectedAvatar: 0,
    },
    getOrders: (x) => {
    },
    orders:[],
    user: [
        {
            message: 'HipHIP',
            error: null,
        }
    ],
};
const store = mockStore(initialState);

describe('<Summary />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const getOrdersMock = jest.fn();
            const deleteOrdersmock = jest.fn();
            const wrapper = shallow(<Summary getOrders={getOrdersMock} deleteOrder={deleteOrdersmock}/>);
          
        });
    });
});

describe('< Summary />', () => {
    describe(' onSubmit ', () => {
        it('Edit order', () => {
            const getOrdersMock = jest.fn();
            const deleteOrdersmock = jest.fn();
            const orders = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = mount(
                <MemoryRouter>
                    <Summary deleteOrder={deleteOrdersmock} getOrders={getOrdersMock} orderData={orders} />
                </MemoryRouter>
                );

            // const component = wrapper.dive();
            expect(wrapper.find('OrderSum').length).toEqual(1)
            expect(wrapper.find('OrderSumTr').length).toEqual(1)
            wrapper.find('OrderSumTr').prop('toggleBtn')({target: {}})

            expect(wrapper.find('Modal').length).toEqual(1)
            expect(wrapper.find('button').length).toEqual(1)
            wrapper.find('.button').simulate('click');
        });
    });
});

describe('< Summary />', () => {
    describe(' onSubmit ', () => {
        test('Edit order', () => {
            const getOrdersMock = jest.fn();
            const deleteOrdersmock = jest.fn();
            const orders = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = mount(
                <MemoryRouter>
                    <Summary deleteOrder={deleteOrdersmock} getOrders={getOrdersMock} orderData={orders} />
                </MemoryRouter>
            );

            // const component = wrapper.dive();
            expect(wrapper.find('OrderSum').length).toEqual(1)
            expect(wrapper.find('OrderSumTr').length).toEqual(1)
            wrapper.find('OrderSumTr').prop('toggleBtn')({ target: {} })

            let isOpen = true
            wrapper.setProps({ isOpen })
            expect(wrapper.find('Modal').length).toEqual(1)
            expect(wrapper.find('#btn-del').length).toEqual(1)
            wrapper.find('#btn-del').simulate('click');

            expect(deleteOrdersmock.mock.calls.length).toEqual(1);
        });
    });
});
