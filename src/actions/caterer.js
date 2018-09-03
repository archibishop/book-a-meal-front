import { CATERER_LIST , CATERER_LIST_FAILED} from './types';


export const getCaterer = authToken => dispatch => {
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': authToken
        }
    }
    return fetch(`http://127.0.0.1:5000/bookmealapi/v1.0/caterers`, payload)
        .then(response => response.json())
        .then(data => dispatch(
            {
                type: CATERER_LIST,
                payload: data.Caterers
            }
        ))
        .catch(error => error)

}



