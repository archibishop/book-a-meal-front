import { MENU_DAYS } from '../actions/types';

const intialState = {
    menu_days: [],
    error: null
}

export default function getMenuDaysReducer(state = intialState, action) {
    console.log("get the strap")
    console.log(action.payload)
    switch (action.type) {
        case MENU_DAYS:
            return {
                ...state,
                menu_days: action.payload
            }
    }
    return state;
}
