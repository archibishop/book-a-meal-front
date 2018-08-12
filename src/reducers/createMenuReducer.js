import { MENU_LIST_CREATE, MENU_LIST_CREATE_FAILED } from '../actions/types';

const intialState = {
    message: '',
    error: null
}

export default function createMenuReducer(state = intialState, action) {
    switch (action.type) {
        case MENU_LIST_CREATE:
            return {
                ...state,
                message: action.payload
            }
        case MENU_LIST_CREATE_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
