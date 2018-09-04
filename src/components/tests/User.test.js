import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedUser, { User } from '../auth/user';
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

describe('<User />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ConnectedUser store={store} />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});

describe('<User />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<User />);
        });
    });
});



describe('<User />', () => {
    describe('Show prop is false', () => {
        test('User renders null', () => {
            const show = false
            const wrapper = mount(
                <MemoryRouter>
                    <User show={show} />
                </MemoryRouter>
            );
            expect(wrapper.find('#password').length).toEqual(0)
        });
    });
});

describe('<User />', () => {
    describe(' onSubmit ', () => {
        test('test form submission', () => {
            const signupMock = jest.fn();
            const show = true
            const wrapper = mount(
                <MemoryRouter>
                    <User show={show} signup={signupMock}/>
                </MemoryRouter>
            );
            expect(wrapper.find('#password').length).toEqual(1)

            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                },
                target: {
                    bname: {
                        value: "Fast foods"
                    },
                    fname: {
                        value: "JOHNNY"
                    },
                    lname: {
                        value: "123456"
                    },
                    email: {
                        value: "123456"
                    },
                    password: {
                        value: "123456"
                    },
                    location: {
                        value: "town hall"
                    }
                }
            });

            expect(signupMock.mock.calls.length).toEqual(1);
        });
    });
});
