import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { TableRow } from '../user/orders/OrdersTableRow';

const mockStore = configureStore();
const initialState = {
    selectReducer: {
        selectedAvatar: 0,
    },
    getOrders: (x) => {
    },
    order: {
        meal_name: "flash",
        price: 6000,
        created_at: "test"
    },
    user: [
        {
            message: 'HipHIP',
            error: null,
        }
    ],
};
const store = mockStore(initialState);


describe('<TableRow />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const toggleBtnMock = jest.fn();
            const orders = [];
            const wrapper = shallow(<TableRow order={orders} toggleButtonModal={toggleBtnMock}/>);
        });
    });
});

describe('<TableRow />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const toggleBtnMock = jest.fn();
            const order = {
                meal_name: "flash",
                price: 6000,
                created_at: "date"
            }
            const wrapper = mount(<TableRow order={order} toggleButtonModal={toggleBtnMock}/>);
        });
    });
});

describe('<TableRow />', () => {
    describe(' onSubmit ', () => {
        test('Test Edit button', () => {
            const toggleBtnMock = jest.fn();
            const order = {
                id: 2,
                meal_name: "flash",
                price: 6000
            }
            const wrapper = mount(<TableRow order={order} toggleButtonModal1={toggleBtnMock} />);
            expect(wrapper.find('.button-edit').length).toEqual(1)

            wrapper.find('.button-edit').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(toggleBtnMock.mock.calls.length).toEqual(1);
        });
    });
});


describe('<TableRow />', () => {
    describe(' onSubmit ', () => {
        test('test toggle button', () => {
            const toggleBtnMock = jest.fn();
            const order = {
                id: 2,
                meal_name: "flash",
                price: 6000
            }
            const wrapper = mount(<TableRow order={order} toggleButtonModal={toggleBtnMock} />);
            expect(wrapper.find('.button').length).toEqual(1)

            wrapper.find('.button').simulate('click', {
                preventDefault: () => {
                }
            });

            expect(toggleBtnMock.mock.calls.length).toEqual(1);
        });
    });
});
