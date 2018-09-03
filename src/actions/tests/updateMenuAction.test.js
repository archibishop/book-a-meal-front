import { updateMenu } from '../updateMenu';
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
            .put('http://127.0.0.1:5000/bookmealapi/v1.0/menu/1', { message: 'Menu has been updated' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "message": "Menu has been updated" }, "type": "UPDATE_MENU" }
        ]
        const store = mockStore({})

        let menuData = {
            user_id: 1,
            meal_id: [1,2,3]
        }
        return store.dispatch(updateMenu(1, menuData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

