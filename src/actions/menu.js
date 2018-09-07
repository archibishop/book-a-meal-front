import { MENU_LIST, MENU_LIST_FAILED } from './types';
import { dispatchAction } from '../utils/dispatchAction';

export const getMenu = (day, dataMenu) => dispatch => {
    let payload ={
        method: "POST",
        body: dataMenu,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("x-access-token")
        }
    }

    let url = `https://api-test-book.herokuapp.com/bookamealapi/v1.0/menu/day/` + day
    return dispatchAction(url, payload, MENU_LIST, dispatch)

    
}


