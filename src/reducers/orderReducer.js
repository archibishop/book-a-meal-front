import { ORDERS_LIST, NO_ORDERS } from '../actions/types'

const intialState = {
    orders: [],
    error: null
}

export default function orderReducer(state=intialState, action){
    switch(action.type){
        case ORDERS_LIST:
            return {
                ...state,
                orders: action.payload
            }
        case NO_ORDERS:
            return {
                ...state,
                errors: action.payload
            }
    }
    return state;
}
