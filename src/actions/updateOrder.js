import { UPDATE_ORDER, DELETE_ORDER } from './types'
import Notifications, { notify } from 'react-notify-toast';

export const updateOrder = (id, orderData) => dispatch => {
    let payload = {
        method: 'PUT',
        body: orderData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-acess-token')
        }
    }

    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/orders/` + id, payload)
    .then(response=>response.json())
    .then(data => {
        dispatch(
            {
                type: UPDATE_ORDER,
                payload: data
            }
        );
        notify.show(data.message, 'success', 5000);
    }
    )
    .catch(error=>error)
}

