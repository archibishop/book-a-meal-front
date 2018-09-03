import { DAYS } from '../actions/types';

const intialState = {
    days: [],
    error: null
}

export default function mealReducer(state = intialState, action) {
    switch (action.type) {
        case DAYS:
            return {
                ...state,
                days: action.payload
            }
    }
    return state;
}
