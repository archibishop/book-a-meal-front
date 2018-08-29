import { UPDATE_MEAL, UPDATE_MEAL_FAILED } from './types';

export const updateMeal = (id, orderData) => dispatch => {
    let payload = {
        method: "PUT",
        body: orderData,
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/meals/`+id, payload)
    .then(response=>response.json())
    .then(data=> {
            dispatch(
            {
                type: UPDATE_MEAL,
                payload: data
            }
            );
            console.log("here")
            console.log(data.message)
        }
    )
    .catch(error=>error)
}
