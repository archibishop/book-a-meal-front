import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedCaterer, { Caterer } from '../auth/caterer';
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

describe('<Caterer />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ConnectedCaterer store={store} />);
           

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});

describe('<Caterer />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Caterer />);
            ;
        });
    });
});

describe('<Caterer />', () => {
    describe('onSubmit()', () => {
        test('successfully calls the onSubmit handler', () => {
            const signupMock = jest.fn();
            const wrapper = mount(
                <MemoryRouter>
                    <Caterer signup={signupMock} />
                </MemoryRouter>
            );
        
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

describe('<Caterer />', () => {
    describe('onSubmit()', () => {
        test('it doesnt not show form if not selected', () => {
            
            const show = true
            const wrapper = mount(
                <MemoryRouter>
                    <Caterer show={show} />
                </MemoryRouter>
            );
            expect(wrapper.find('#password').length).toEqual(0)
        });
    });
});

