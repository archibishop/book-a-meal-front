import { MENU_LIST_CREATE, MENU_LIST_CREATE_FAILED } from './types';

export const createMenu = menuData => dispatch => {
    let payload = {
        method: "POST",
        body: menuData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/menu`, payload)
        .then(response => response.json())
        .then(data => dispatch(
            {
                type: MENU_LIST_CREATE,
                action: data.message
            }
        ))
        .catch(error => error)
}

