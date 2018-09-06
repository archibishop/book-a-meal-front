import { getMeals } from '../meals';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import nock from 'nock'
import "isomorphic-fetch"

// const fetchMock = require('fetch-mock');

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)



describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        fetchMock
            .getOnce('https://api-test-book.herokuapp.com/bookmealapi/v1.0/meals/1', {  meals: ['do something'] , headers: { 'content-type': 'application/json' } })
        .catch(unmatchedUrl => {
            // fallover call original fetch, because fetch-mock treats
            // any unmatched call as an error - its target is testing
            return realFetch(unmatchedUrl)
        })

        const expectedActions = [
            // { type: 'FETCH_TODOS_REQUEST' },
            // { type: 'types.FETCH_TODOS_SUCCESS', body: { todos: ['do something'] } }
            { "payload": ["do something"], "type": "MEAL_LIST" }
        ]
        const store = mockStore({ })

        let mealData = {
            'id': 1,
            'meal_name': 'test',
            'meal_type': 'clappp'
        }
        return store.dispatch(getMeals(1,mealData)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})


// describe('async actions', () => {
//     afterEach(() => {
//         nock.cleanAll()
//     })

//     it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', (done) => {
//         nock('http://127.0.0.1:5000')
//         .get('/bookmealapi/v1.0/meals/1')
//         .reply(200, { meals: ['Meal Data']  })

//         const expectedActions = [
//             { type: 'MEAL_LIST', payload: ['Meal Data']}
//         ]
//         const store = mockStore({ })
//         let mealData = {
//             'id': 1,
//             'meal_name': 'test',
//             'meal_type': 'clappp'
//         }
//         return store.dispatch(getMeals(1, mealData)).then(() => {
//             // return of async actions
//             expect(store.getActions()).toEqual(expectedActions)
//         })
//     })
// })
