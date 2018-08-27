import { USER_ORDERS, USER_ORDERS_FAILED } from '../actions/types'

const intialState = {
    orders: [],
    error: null
}

export default function orderReducer(state = intialState, action) {
    switch (action.type) {
        case USER_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case USER_ORDERS_FAILED:
            return {
                ...state,
                errors: action.payload
            }
    }
    return state;
}
