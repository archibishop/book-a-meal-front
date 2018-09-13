import { UPDATE_MENU, UPDATE_MENU_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const updateMenu =(id, menuData) => dispatch =>{
    // update menu
    let payload = {
        body: menuData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        },
        method: 'PUT'
    }

    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/menu/` + id
    return dispatchAction(url, payload, UPDATE_MENU, dispatch)
    
}


