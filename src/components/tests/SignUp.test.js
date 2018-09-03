import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedSignUp, { SignUp } from '../auth/SignUp';

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

describe('<SignUp />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ConnectedSignUp store={store} />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});

describe('<SignUp />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<SignUp />);
        });
    });
});


describe('<SignUp />', () => {
    describe('render()', () => {
        test('Test form submission', () => {
            const historyMock = jest.fn();
            const wrapper = shallow(<ConnectedSignUp store={store} history={historyMock}/>);

            expect(wrapper.find('form').length).toEqual(1)


            wrapper.find('form').simulate('click', {
                preventDefault: () => {
                },
                target: {
                    value: "caterer"
                }
            });

            wrapper.find('form').simulate('click', {
                preventDefault: () => {
                },
                target: {
                    value: "user"
                }
            });
        });
    });
});
