import { UPDATE_ORDER, DELETE_ORDER } from './types'


export const updateOrder = (id, orderData) => dispatch => {
    console.log(id)
    console.log(orderData)
    let payload = {
        method: 'PUT',
        body: orderData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-acess-token')
        }
    }

    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/orders/`+id, payload)
    .then(response=>response.json())
    .then(data=>dispatch(
        {
            type: UPDATE_ORDER,
            payload: data
        }
    ))
    .catch(error=>error)
}

