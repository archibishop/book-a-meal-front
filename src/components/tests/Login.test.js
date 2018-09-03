import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedLogin, { Login } from '../auth/Login';
import { MemoryRouter } from 'react-router-dom';

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

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});

describe('<Login />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Login />);
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
                <MemoryRouter>
                    <Login  login={loginMock} />
                </MemoryRouter>
            );
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                },
                target: {
                    elements: {
                        email: "test333",
                        password:{ 
                            value: "123456"
                        }
                    }
                }
            });

            expect(loginMock.mock.calls.length).toEqual(1);
        });
    });
});


describe('<Login />', () => {
    describe('render()', () => {
        test('Components Will recieve props', () => {

            const historyMock = {
                push: jest.fn()
            };
            const wrapper = shallow(<Login history={historyMock}/>);

            // const component = wrapper.dive();
            expect(wrapper.find('#password').length).toEqual(1)

            let userData = {
                token: "oviono12i134",
                role: "admin"
            }

            wrapper.setProps({ userData })
            expect(wrapper.find('#password').length).toEqual(1)
            expect(historyMock.push.mock.calls.length).toEqual(1);
        });
    });
});

describe('<Login />', () => {
    describe('render()', () => {
        test('Components Will recieve props', () => {

            const historyMock = {
                push: jest.fn()
            };
            const wrapper = shallow(<Login history={historyMock} />);

            // const component = wrapper.dive();
            expect(wrapper.find('#password').length).toEqual(1)

            let userData = {
                token: "oviono12i134",
                role: "user"
            }

            wrapper.setProps({ userData })
            expect(wrapper.find('#password').length).toEqual(1)
            expect(historyMock.push.mock.calls.length).toEqual(1);
        });
    });
});
