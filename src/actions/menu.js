import { MENU_LIST, MENU_LIST_FAILED } from './types';

export const getMenu = (day, dataMenu) => dispatch => {
    let payload ={
        method: "POST",
        body: dataMenu,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(`http://127.0.0.1:5000/bookamealapi/v1.0/menu/day/` + day, payload)
    .then(response=>response.json())
    .then(data => dispatch(
        {
            type: MENU_LIST,
            payload: data
        }
    ))
    .catch(error=>error)
}

