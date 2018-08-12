import { MEAL_LIST, NO_MEALS } from '../actions/types';

const intialState = {
    meals: [],
    error: null
}

export default function mealReducer(state=intialState, action){
    switch(action.type){
        case MEAL_LIST:
            return {
                ...state,
                meals: action.payload
            }
        case NO_MEALS:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
