import { DELETE_MEAL, DELETE_MEAL_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const deleteMeal = id => dispatch => {
    let payload = {
        method: "DELETE",
        headers: {
            'Content-type': 'appplication/json'
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/meals/` + id,payload)
    .then(response => response.json())
    .then(data => {
        dispatch (
        {
            type: DELETE_MEAL,
            payload: data
        });   
        notify.show(data.message, 'warning', 5000);
    }
    )
    .catch(error=>error)
}
