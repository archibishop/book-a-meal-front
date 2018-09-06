import { UPDATE_MEAL, UPDATE_MEAL_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const updateMeal = (id, orderData) => dispatch => {
    let payload = {
        method: "PUT",
        body: orderData,
        headers: {
            'Content-type': 'application/json'
        }
    }

    return fetch(`https://book-a-meal-front.herokuapp.com/bookmealapi/v1.0/meals/`+id, payload)
    .then(response=>response.json())
    .then(data=> {
            dispatch(
            {
                type: UPDATE_MEAL,
                payload: data
            }
            );
            notify.show(data.message, 'success', 5000);
        }
    )
    .catch(error=>error)
}
