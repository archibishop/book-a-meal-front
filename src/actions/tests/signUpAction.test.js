import { signup } from '../signUp';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import nock from 'nock'
import "isomorphic-fetch"

// const fetchMock = require('fetch-mock');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        fetchMock
            .post('http://127.0.0.1:5000/bookmealapi/v1.0/auth/signup', { message: 'New User has been created' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": "New User has been created", "type": "SIGNUP" }
        ]
        const store = mockStore({})

        let userData = {
            first_name: "Martinez",
            last_name: "Alonso",
            location: "Rubaga",
            email: "test@gmail.com",
            password: "123455"
        }
        return store.dispatch(signup(userData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

