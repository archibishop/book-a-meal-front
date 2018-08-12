import { ORDERS_LIST } from './types'

export const getOrders = authToken => dispatch => {
    console.log("Inside Get Order Function")
    // console.log(authToken);
    let payload = {
        method: 'GET',
        headers:{}
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/orders`, payload)
    .then(response => response.json())
    .then(data => dispatch(
        {
            type: ORDERS_LIST,
            payload: data.transactions
        }
    ))
    .catch(error => error)
}
