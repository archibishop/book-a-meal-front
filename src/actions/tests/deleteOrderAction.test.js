import { deleteOrder } from '../deleteOrder';
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
            .delete('https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders/1', { message: 'Order has been removed' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "message": "Order has been removed" }, "type": "DELETE_ORDER" }
        ]
        const store = mockStore({})

        let authData = 'aqwsedxft04kdeo234df'
        return store.dispatch(deleteOrder(1)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

