
import { LOGIN_USER, FETCH_USERS_REJECTED} from './types'; 
import Notifications, { notify } from 'react-notify-toast';

export const login = authData => dispatch => {
        let payload = {
            method:'POST',
            body: authData,
            headers: {
                'Content-Type':'application/json',
            }
        };

    return fetch(`https://api-test-book.herokuapp.com/bookmealapi/v1.0/auth/login`, payload)
        .then(response=>response.json())
        .then(data=>{
            dispatch(
            {
                type: LOGIN_USER,
                payload: data
            });
            notify.show(data.message, 'success', 5000);
        })
        .catch(error=>error)
    }

// notify.show("Password field cannot be empty", 'warning', 5000)
