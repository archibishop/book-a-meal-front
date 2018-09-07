import { USER_ORDERS } from './types'

export const getOrdersUser = () => dispatch => {
    let user_id = localStorage.getItem("user_id")
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': localStorage.getItem("x-access-token")
        }
    }
    return fetch(`https://api-test-book.herokuapp.com/bookmealapi/v1.0/orders/` + user_id, payload)
    .then(response => response.json())
    .then(data => dispatch({
            type: USER_ORDERS,
            payload: data.transactions
        }
    ))
    .catch(error => error)
}


