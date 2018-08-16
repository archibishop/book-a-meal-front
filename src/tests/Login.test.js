import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedLogin, { Login } from '../components/Login';
import Nav from '../components/NavBar';

const mockStore = configureStore();
const initialState = {
    selectReducer: {
        selectedAvatar: 0,
    },
    login: (x) => {
    },
    user: [
        {
            message: 'HipHIP',
            error: null,
        }
    ],
};
const store = mockStore(initialState);

describe('<Login />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ConnectedLogin store={store} />);
            // const component = wrapper.dive();

            // expect(toJson(component)).toMatchSnapshot();
        });
    });
});

describe('<Login />', () => {
    describe('onSubmit()', () => {
        test('successfully calls the onSubmit handler', () => {
            const baseProps = {
                // whatever fake props you want passed to the component
                // ...
                login: jest.fn(),
            }
            const mockOnClick = jest.fn();
            const loginMock = jest.fn();
            const wrapper = mount(
                <Login  login={loginMock} />
            );
            // const component = wrapper.dive();
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                },
                target: {
                    elements: {
                        email: "test",
                        password: "12345"
                    }
                }
            });

            expect(loginMock.mock.calls.length).toEqual(1);
            // expect(wrapper.find(Nav).length).to.equal(status.length);
        });
    });
});
