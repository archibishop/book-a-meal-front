import { UPDATE_MENU, UPDATE_MENU_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const updateMenu =(id, menuData) => dispatch =>{
    let payload = {
        method: 'PUT',
        body: menuData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/menu/`+id, payload)
    .then(response=>response.json())
        .then(data => {
            dispatch(
                {
                    type: UPDATE_MENU,
                    payload: data
                }
            );
            notify.show(data.message, 'success', 5000);
        })
    .catch(error => console.log(error))
}

