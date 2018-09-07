import { MENU_LIST_CREATE, MENU_LIST_CREATE_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const createMenu = menuData => dispatch => {
    let payload = {
        method: "POST",
        body: menuData,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/menu`
    return dispatchAction(url, payload, MENU_LIST_CREATE, dispatch)
    
}


