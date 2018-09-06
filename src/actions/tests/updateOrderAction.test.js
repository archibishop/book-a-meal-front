import { updateOrder } from '../updateOrder';
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
            .put('https://book-a-meal-front.herokuapp.com/bookmealapi/v1.0/orders/1', { message: 'Order has been updated' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "message": "Order has been updated" }, "type": "UPDATE_ORDER" }
        ]
        const store = mockStore({})

        let orderData = {
            meal_name: "Breakfast"
        }
        return store.dispatch(updateOrder(1, orderData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

