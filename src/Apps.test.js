import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Login from './components/Login';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const mockStore = configureStore();
const initialState = {
  selectReducer: {
    selectedAvatar: 0,
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
      const wrapper = shallow(<Login store={store}/>);
      // const component = wrapper.dive();

      // expect(toJson(component)).toMatchSnapshot();
    });
  });
});
