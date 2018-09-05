import { ORDERS_LIST, NO_ORDERS } from '../actions/types'

const intialState = {
    orders: [],
    total: null,
    error: null
}

export default function orderReducer(state=intialState, action){
    switch(action.type){
        case ORDERS_LIST:
            return {
                ...state,
                orders: action.payload.transactions,
                total: action.payload.total
            }
        case NO_ORDERS:
            return {
                ...state,
                errors: action.payload
            }
    }
    return state;
}
