import  { UPDATE_MEAL, UPDATE_MEAL_FAILED } from '../actions/types';

const intialState = {
    message: '',
    error: null
}

export default function updateMealReducer(state=intialState, action){
    switch(action.type){
        case UPDATE_MEAL:
            return {
                ...state,
                message: action.payload
            }
        case UPDATE_MEAL_FAILED:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
