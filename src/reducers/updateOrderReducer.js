import { UPDATE_ORDER, UPDATE_ORDER_FAILED } from '../actions/types';

const  intialState = {
    message: '',
    error: null
}

export default function updateOrderReducer(state=intialState, action){
    switch(action.type){
        case UPDATE_ORDER:
            return {
                ...state,
                message: action.payload
            }

        case UPDATE_ORDER_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state
}