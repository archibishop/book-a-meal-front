import { updateMeal } from '../updateMeal';
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
            .put('https://api-test-book.herokuapp.com/bookmealapi/v1.0/meals/1', { message: 'Meal has been updated' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "message": "Meal has been updated" }, "type": "UPDATE_MEAL" }
        ]
        const store = mockStore({})

        let mealData = {
            meal_name: "Breakfast",
            meal_type: "lunch",
            price: 6000
        }
        return store.dispatch(updateMeal(1,mealData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

