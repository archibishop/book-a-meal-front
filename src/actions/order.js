import { MAKE_ORDER, MAKE_ORDER_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const makeOrder = order => dispatch => {
    let payload = {
        // Make order payload
        method: 'POST',
        body: order,
        headers:{
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders`
    return dispatchAction(url, payload, MAKE_ORDER, dispatch)
    
}


