import { MENU_LIST_CREATE, MENU_LIST_CREATE_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const createMenu = menuData => dispatch => {
    let payload = {
        method: "POST",
        body: menuData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    return fetch(`https://api-test-book.herokuapp.com/bookmealapi/v1.0/menu`, payload)
    .then(response => response.json())
    .then(data => {
        dispatch(
                {
                    type: MENU_LIST_CREATE,
                    action: data.message
                }
            );
            notify.show(data.message, 'success', 5000);
        }
    )
    .catch(error => error)
}

