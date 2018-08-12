import { ADD_MEAL, ADD_MEAL_FAILED} from './types';


export const addMeal = mealData => dispatch => { 
    console.log("ADD MEAL")
    console.log(mealData)
    let payload = {
        method: "POST",
        body: mealData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/meals`, payload)
    .then(response => response.json())
    .then(data => dispatch(
            {
                type: ADD_MEAL,
                payload: data
            }
        ))
    .catch(error => error)
}

