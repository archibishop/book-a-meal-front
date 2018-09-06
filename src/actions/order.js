import { MAKE_ORDER, MAKE_ORDER_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';


export const makeOrder = order => dispatch => {
    let payload = {
        method: 'POST',
        body: order,
        headers:{
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    return fetch(`https://book-a-meal-front.herokuapp.com/bookmealapi/v1.0/orders`, payload)
    .then(response => response.json())
    .then(data => {dispatch(
        {
            type: MAKE_ORDER,
            payload: data.message
        }
        );
        notify.show(data.message, 'success', 5000);
    }
    )
    .catch(error=>error)
}
