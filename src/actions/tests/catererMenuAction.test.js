import { getCatererMenu } from '../catererMenu';
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
            .getOnce('http://127.0.0.1:5000/bookamealapi/v1.0/caterers/1', { Menu: ['Caterer Menu'] })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": ["Caterer Menu"], "type": "CATERER_MENU " }
        ]
        const store = mockStore({})

        let authData = 'aqwsedxft04kdeo234df'
        return store.dispatch(getCatererMenu(1,authData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

