
import { LOGIN_USER, FETCH_USERS_REJECTED} from './types'; 

export const login = authData => dispatch => {
        let payload = {
            method:'POST',
            body: authData,
            headers: {
                'Content-Type':'application/json',
            }
        };

        fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/auth/login`, payload)
        .then(response=>response.json())
        .then(data=>dispatch(
            {
                type: LOGIN_USER,
                payload: data
            }
        ))
        .catch(error=>error)
    }


