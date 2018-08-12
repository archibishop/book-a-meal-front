import { MAKE_ORDER, MAKE_ORDER_FAILED } from './types'


export const makeOrder = order => dispatch => {
    let payload = {
        method: 'POST',
        body: order,
        headers:{
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/orders`, payload)
    .then(response => response.json)
    .then(data=>dispatch(
        {
            type: MAKE_ORDER,
            message: data.transactions
        }
    ))
    .catch(error=>error)
    
}
