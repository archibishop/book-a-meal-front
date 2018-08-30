
import { LOGIN_USER, FETCH_USERS_REJECTED} from '../actions/types'

const intialState = {
    message: '',
    token: '',
    error: null
}
export default function userReducer(state = intialState , action) {
    switch (action.type) {
        case LOGIN_USER: {
            return {     
                ...state,
                message: action.payload
            }
        }
        case FETCH_USERS_REJECTED: {
            return {
                ...state,
                error: action.payload
            }
        }
    }
    return state
}
