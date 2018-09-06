import { DELETE_ORDER, DELETE_ORDER_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const deleteOrder = id => dispatch =>{
    let payload = {
        method: 'DELETE',
        headers: {
            'x-access-token': localStorage.getItem('x-access-token')
        }
        }
    return fetch(`https://book-a-meal-front.herokuapp.com/bookmealapi/v1.0/orders/` + id, payload)
    .then(response=>response.json())
    .then(data=>{
        dispatch(
        {
            type: DELETE_ORDER,
            payload: data
        });
        notify.show(data.message, 'warning', 5000);
    }
    )
    .catch(error=>error)  
}
