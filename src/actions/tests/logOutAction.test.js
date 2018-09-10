import { logout } from '../logOut';
import { getMenuDays } from '../getMenuDays';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { login } from '../auth';

// const fetchMock = require('fetch-mock');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('action', () => {

    it('it dispatches actions', () => {

        const expectedActions = [
            { "payload": "clear data", "type": "LOG_OUT" }
        ]
        const store = mockStore({})
        
        store.dispatch(logout())
        expect(store.getActions()).toEqual(expectedActions)
    })
})

