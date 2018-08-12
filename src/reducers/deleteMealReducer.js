import { DELETE_MEAL, DELETE_MEAL_FAILED } from '../actions/types';


const intialState = {
    message: '',
    error: null
}


export default function deleteMealReducer(state=intialState, action){
    switch(action.type){
        case DELETE_MEAL:
            return {
                ...state,
                message: action.payload
            }
        case DELETE_MEAL_FAILED:
            return{
                ...state,
                error: action.payload
            }    
    }
    return state;
}
