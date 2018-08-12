import { MAKE_ORDER, MAKE_ORDER_FAILED } from '../actions/types';

const intialState = {
    message: '',
    error: null
}

export default function makeOrderReducer(state=intialState, action){
    switch(action.type){
        case MAKE_ORDER:
            return {
                ...state,
                message: action.payload
            }
        case MAKE_ORDER_FAILED:
            return {
                ...state,
                message: action.payload
            }

    }
    return state
}
