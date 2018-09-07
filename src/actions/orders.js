import { ORDERS_LIST } from './types';
import { dispatchAction } from '../utils/dispatchAction';

export const getOrders = (id, authToken) => dispatch => {
    let payload = {
        method: 'GET',
        headers:{
            'x-access-token': localStorage.getItem("x-access-token")
        }
    }

    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders/caterer/` + id
    return dispatchAction(url, payload, ORDERS_LIST, dispatch)
}


