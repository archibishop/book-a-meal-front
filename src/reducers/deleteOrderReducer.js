import { DELETE_ORDER, DELETE_ORDER_FAILED } from '../actions/types';

const intialState = {
    message: '',
    error: null
}


export default function deleteOrderReducer(state=intialState, action){
    switch(action.type){
        case DELETE_ORDER:
            return {
                ...state,
                message: action.payload.message
            }

        case DELETE_ORDER_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
