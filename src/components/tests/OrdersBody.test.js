import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { OrdersBody } from '../user/orders/OrdersBody';

// const mockStore = configureStore();
// const initialState = {
//     selectReducer: {
//         selectedAvatar: 0,
//     },
//     getOrders: (x) => {
//     },
//     orders: [],
//     user: [
//         {
//             message: 'HipHIP',
//             error: null,
//         }
//     ],
// };
// const store = mockStore(initialState);


describe('<OrdersBody />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const orders = [];
            const wrapper = shallow(<OrdersBody orders={orders} />);
            
        });
    });
});

describe('<OrdersBody />', () => {
    describe('render()', () => {
        test('Test functions sent to table row are triggered', () => {
            const orders = [{
                id: 3,
                meal_name: "flash",
                price: 6000,
                meal_type: "Crush"
            }];
            const toggleMock = jest.fn();
            const toggleMock1 = jest.fn();
            const wrapper = mount(<OrdersBody orders={orders} toggleButton={toggleMock} toggleButton1={toggleMock1} />);
            expect(wrapper.find('TableRow').length).toEqual(1)

            wrapper.find('TableRow').prop('toggleButtonModal')({ target: { value: 'somevalue' } })
            expect(toggleMock.mock.calls.length).toEqual(1);

            wrapper.find('TableRow').prop('toggleButtonModal1')({ target: { value: 'somevalue' } })
            expect(toggleMock1.mock.calls.length).toEqual(1);
            ;
        });
    });
});
