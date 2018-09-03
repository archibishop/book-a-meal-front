import { makeOrder } from '../order';
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
            .post('http://127.0.0.1:5000/bookmealapi/v1.0/orders', { message: 'Order has been successfully created' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": "Order has been successfully created", "type": "MAKE_ORDER" }
        ]
        const store = mockStore({})

        let order = {
            meal_name: "meat",
            meal_type: "lunch"
        }
        return store.dispatch(makeOrder(order)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

