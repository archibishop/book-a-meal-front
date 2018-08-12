import { ADD_MEAL, ADD_MEAL_FAILED } from '../actions/types';

const intialState = {
    message: '',
    error: null
}

export default function addMealReducer(state=intialState, action){
    switch(action.type){
        case ADD_MEAL:
            return {
                ...state,
                message: action.payload
            }
        case ADD_MEAL_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
