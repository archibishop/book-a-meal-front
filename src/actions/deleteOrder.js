import { DELETE_ORDER, DELETE_ORDER_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const deleteOrder = id => dispatch =>{
    let payload = {
        method: 'DELETE',
        headers: {
            'x-access-token': localStorage.getItem('x-access-token')
        }
        }
    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders/` + id
    return dispatchAction(url, payload, DELETE_ORDER, dispatch)    
     
}


