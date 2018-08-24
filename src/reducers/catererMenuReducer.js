import { CATERER_MENU, CATERER_MENU_FAILED } from '../actions/types';

const intialState = {
    menu: [],
    error: null
}

export default function mealReducer(state = intialState, action) {
    switch (action.type) {
        case CATERER_MENU:
            return {
                ...state,
                menu: action.payload
            }
        case CATERER_MENU_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
