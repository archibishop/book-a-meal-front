import { getMenuDays } from '../getMenuDays';
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
            .getOnce('https://api-test-book.herokuapp.com/bookamealapi/v1.0/menu/days/1', { days_list: [{'val': 6, 'day': 3}] })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": [{ 'val': 6, 'day': 3 }], "type": "MENU_DAYS" }
        ]
        const store = mockStore({})

        let data = {
            'value': 1
        }
        return store.dispatch(getMenuDays(1, data)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

