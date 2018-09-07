import { SIGNUP, SIGNUP_FAILED }  from '../actions/types'

const intialState = {
    message: '',
    error: null
}

export default function orderReducer(state = intialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                message: action.payload.message
            }
        case SIGNUP_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
