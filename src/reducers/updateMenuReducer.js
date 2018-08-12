import { UPDATE_MENU, UPDATE_MENU_FAILED } from '../actions/types';

const intialState = {
    message: '',
    error: null
}

export default function updateMenuReducer(state = intialState, action) {
    switch (action.type) {
        case UPDATE_MENU:
            return {
                ...state,
                message: action.payload
            }
        case UPDATE_MENU_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
