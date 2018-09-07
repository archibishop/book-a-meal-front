
import { LOGIN_USER, FETCH_USERS_REJECTED} from './types'; 
import Notifications, { notify } from 'react-notify-toast';
import { dispatchAction } from '../utils/dispatchAction';

export const login = authData => dispatch => {
        let payload = {
            method:'POST',
            body: authData,
            headers: {
                'Content-Type':'application/json',
            }
        };

    let url = `https://api-test-book.herokuapp.com/bookmealapi/v1.0/auth/login`
    return dispatchAction(url, payload, LOGIN_USER, dispatch)
    
    }


