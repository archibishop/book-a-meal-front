import { getDays } from '../getDays';
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
            .getOnce('https://api-test-book.herokuapp.com/bookamealapi/v1.0/days_of_week', { days: ['Monday', 'Tuesday'] })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": ["Monday", "Tuesday"], "type": "DAYS" }
        ]
        const store = mockStore({})

        let authData = 'aqwsedxft04kdeo234df'
        return store.dispatch(getDays(authData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

