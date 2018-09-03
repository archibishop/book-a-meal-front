import { MENU_LIST, MENU_LIST_FAILED } from '../actions/types';

const intialState = {
    menu: [],
    dateList: [],
    menuId: null,
    error: null
}

export default function menuReducer(state = intialState, action) {
    switch (action.type) {
        case MENU_LIST:
            return {
                ...state,
                menu: action.payload.menu_day,
                dateList: action.payload.date_list,
                menuId: action.payload.menu_id
            }
        case MENU_LIST_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
