import { MEAL_LIST, MENU_LIST_FAILED} from './types'

export const getMeals = (id, authToken) => dispatch => {
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': authToken
        }
    }
    
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/meals/` + id , payload)
        .then(response => response.json())
        .then(data => 
            dispatch(
            {
                type: MEAL_LIST,
                payload: data.meals
            })
        )
        .catch(error => dispatch(
            {
                type: MENU_LIST_FAILED,
                payload: error
            }))

}


