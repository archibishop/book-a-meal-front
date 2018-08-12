import { MENU_LIST, MENU_LIST_FAILED } from '../actions/types';

const intialState = {
    menu: [],
    error: null
}

export default function menuReducer(state = intialState, action) {
    switch (action.type) {
        case MENU_LIST:
            return {
                ...state,
                menu: action.payload
            }
        case MENU_LIST_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
