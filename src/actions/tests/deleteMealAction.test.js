import { deleteMeal } from '../deleteMeal';
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
            .delete('http://127.0.0.1:5000/bookmealapi/v1.0/meals/1', { message: 'Meal has been removed' })
            .catch(unmatchedUrl => {
                return realFetch(unmatchedUrl)
            })

        const expectedActions = [
            { "payload": { "message": "Meal has been removed" }, "type": "DELETE_MEAL" }
        ]
        const store = mockStore({})

        let authData = 'aqwsedxft04kdeo234df'
        return store.dispatch(deleteMeal(1)).then(() => {
            // return of async actions
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

