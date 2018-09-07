import { UPDATE_ORDER, DELETE_ORDER } from './types'
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const updateOrder = (id, orderData) => dispatch => {
    let payload = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-acess-token')
        },
        body: orderData,
        method: 'PUT'
    }

    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders/` + id
    return dispatchAction(url, payload, UPDATE_ORDER, dispatch)
    
    
}


