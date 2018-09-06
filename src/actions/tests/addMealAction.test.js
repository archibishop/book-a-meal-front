import { addMeal } from '../addMeal';
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
            .post('https://api-test-book.herokuapp.com/bookmealapi/v1.0/meals', { message: 'Meal created' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "message": "Meal created" }, "type": "ADD_MEAL" }
        ]
        const store = mockStore({})

        let mealData = {
            'id': 1,
            'meal_name': 'test',
            'meal_type': 'clappp'
        }
        return store.dispatch(addMeal(mealData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

