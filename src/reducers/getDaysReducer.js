import { DAYS } from '../actions/types';

const intialState = {
    days: [],
    error: null
}

export default function getDaysReducer(state = intialState, action) {
    switch (action.type) {
        case DAYS:
            return {
                ...state,
                days: action.payload
            }
    }
    return state;
}
