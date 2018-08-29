import { ADD_MEAL, ADD_MEAL_FAILED} from './types';
import Notifications, { notify } from 'react-notify-toast';


export const addMeal = mealData => dispatch => {
    let payload = {
        method: "POST",
        body: mealData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/meals`, payload)
    .then(response => response.json())
    .then(data => {
        dispatch(
            {
                type: ADD_MEAL,
                payload: data
            }
        );
        notify.show(data.message, 'success', 5000);
    }
    )
    .catch(error => error)
}

