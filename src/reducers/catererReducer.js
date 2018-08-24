import { CATERER_LIST, CATERER_LIST_FAILED } from '../actions/types';

const intialState = {
    caterers: [],
    error: null
}

export default function mealReducer(state = intialState, action) {
    switch (action.type) {
        case CATERER_LIST:
            return {
                ...state,
                caterers: action.payload
            }
        case CATERER_LIST_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
