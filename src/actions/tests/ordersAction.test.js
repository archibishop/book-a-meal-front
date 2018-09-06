import { getOrders } from '../orders';
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
            .get('https://book-a-meal-front.herokuapp.com/bookmealapi/v1.0/orders/caterer/1' , { transactions: ['Orders'], total: 2000 })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "transactions": ['Orders'], "total": 2000 }, "type": "ORDERS_LIST" }
        ]
        const store = mockStore({})

        let authToken = 'eufnfkajiurn3495834985'
        return store.dispatch(getOrders(1,authToken)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

