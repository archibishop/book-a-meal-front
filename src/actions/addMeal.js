import { ADD_MEAL, ADD_MEAL_FAILED} from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const addMeal = mealData => dispatch => {
    // add meal
    let payload = {
        method: "POST",
        body: mealData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/meals`
    return dispatchAction(url, payload, ADD_MEAL, dispatch)
    
}

