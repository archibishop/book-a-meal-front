import { DELETE_MEAL, DELETE_MEAL_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const deleteMeal = id => dispatch => {
    let payload = {
        method: "DELETE",
        headers: {
            'Content-type': 'appplication/json'
        }
    }
    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/meals/` + id
    return dispatchAction(url, payload, DELETE_MEAL, dispatch)
    
}


