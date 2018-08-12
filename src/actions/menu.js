import { MENU_LIST, MENU_LIST_FAILED } from './types';

export const getMenu = id => dispatch => {
    let payload ={
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/menu`, payload)
    .then(response=>response.json())
        .then(data => dispatch(
            {
                type: MENU_LIST,
                payload: data.menu_day
            }
        ))
    .catch(error=>error)
}

// dispatch(
//     {
//         type: MENU_LIST,
//         action: data
//     }
// )
// console.log(data.menu_day[1].meal_ids
