import { ORDERS_LIST } from './types'

export const getOrders = (id, authToken) => dispatch => {
    let payload = {
        method: 'GET',
        headers:{
            'x-access-token': localStorage.getItem("x-access-token")
        }
    }
    return fetch(`https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders/caterer/` + id, payload)
    .then(response => response.json())
    .then(data => dispatch(
        {
            type: ORDERS_LIST,
            payload: data
        }
    ))
    .catch(error => error)
}
