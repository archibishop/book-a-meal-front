import { createMenu } from '../menuCreate';
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
            .post('https://api-test-book.herokuapp.com/bookmealapi/v1.0/menu', { message: 'Menu has been successfully created' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "action": "Menu has been successfully created", "type": "MENU_LIST_CREATE" }
        ]
        const store = mockStore({})

        let menuData = {
            menu: [1, 2]
        }
        return store.dispatch(createMenu(menuData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

