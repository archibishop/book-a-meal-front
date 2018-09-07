
import { SIGNUP, SIGNUP_FAILED } from './types';
import Notifications, { notify } from 'react-notify-toast';

export const signup = authData => dispatch => {
    let payload = {
        method: 'POST',
        body: authData,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return fetch(`https://api-test-book.herokuapp.com/bookmealapi/v1.0/auth/signup`, payload)
    .then(response => response.json())
    .then(data => {
        dispatch(
            {
                type: SIGNUP,
                payload: data.message
            }
        );
        notify.show(data.message, 'success', 5000);
    })
    .catch(error => error)
}



