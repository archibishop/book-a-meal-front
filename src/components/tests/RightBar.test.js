import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { RightBar } from '../user/order/RightBar';

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


describe('<RightBar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
        const orderList = [{
            id: 2,
            meal_name: "flash",
            price: 6000,
            meal_type: "Crush"
        }]
            const wrapper = shallow(<RightBar orderList={orderList} />);
            
        });
    });
});

describe('<RightBar />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const orderList = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = mount(<RightBar orderList={orderList} />);
            wrapper.setState({ orderList })
            
        });
    });
});

describe('<RightBar />', () => {
    describe(' onSubmit ', () => {
        test('test button order ', () => {
            const orderDeleteMock = jest.fn();
            const handleAddOrderMock = jest.fn();
            const clearListMock = jest.fn()
            const orderList = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = shallow(<RightBar clearList={clearListMock} orderList={orderList} orderDeleteByName={orderDeleteMock} handleAddOrder={handleAddOrderMock} />);
            expect(wrapper.find('Modal').length).toEqual(1)
            expect(wrapper.find('#btn-order').length).toEqual(1)

            wrapper.find('#btn-order').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(handleAddOrderMock.mock.calls.length).toEqual(1);
            expect(clearListMock.mock.calls.length).toEqual(1);
        });
    });
});

describe('< RightBar />', () => {
    describe(' onSubmit ', () => {
        test('Test button click', () => {
            const baseProps = {
                // whatever fake props you want passed to the component
                // ...
                signup: jest.fn(),
            }
            const orderDeleteMock = jest.fn();
            const orderList = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = shallow(<RightBar orderList={orderList} orderDeleteByName={orderDeleteMock}  />);
            expect(wrapper.find('Modal').length).toEqual(1)
            expect(wrapper.find('#myBtn').length).toEqual(1)

            wrapper.find('#myBtn').simulate('click', {
                preventDefault: () => {
                }
            });

        });
    });
});

describe('<RightBar />', () => {
    describe(' onSubmit ', () => {
        test('Test delete', () => { 
            const orderDeleteMock = jest.fn();
            const deleteOrderMock = jest.fn();
            const orderList = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }]
            const wrapper = shallow(<RightBar orderList={orderList} orderDeleteByName={orderDeleteMock} deleteOrder={deleteOrderMock}/>);
            
            expect(wrapper.find('OrderItem').length).toEqual(1)
            wrapper.find('OrderItem').prop('orderDeleteByName')({ target: {} })
            expect(deleteOrderMock.mock.calls.length).toEqual(1)
        });
    });
});
