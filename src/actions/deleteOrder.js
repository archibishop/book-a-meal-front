import { DELETE_ORDER, DELETE_ORDER_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const deleteOrder = id => dispatch =>{
    let payload = {
        method: 'DELETE',
        headers: {
            'x-access-token': localStorage.getItem('x-access-token')
        }
        }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/orders/` + id, payload)
    .then(response=>response.json())
    .then(data=>{
        dispatch(
        {
            type: DELETE_ORDER,
            payload: data
        });
        console.log(data)
        notify.show(data.message, 'warning', 5000);
    }
    )
    .catch(error=>error)  
}
