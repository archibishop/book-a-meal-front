import { UPDATE_MEAL, UPDATE_MEAL_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const updateMeal = (id, orderData) => dispatch => {
    // Update Meal
    let payload = {
        method: "PUT",
        body: orderData,
        headers: {
            'Content-type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }

    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/meals/` + id
    return dispatchAction(url, payload, UPDATE_MEAL, dispatch)
    
}

