import { CATERER_MENU, CATERER_MENU_FAILED } from './types';


export const getCatererMenu = (id,authToken) => dispatch => {
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': authToken
        }
    }
    return fetch(`http://127.0.0.1:5000/bookamealapi/v1.0/caterers/` + id, payload)
        .then(response => response.json())
        .then(data => dispatch(
            {
                type: CATERER_MENU,
                payload: data.Menu
            }
        ))
        .catch(error => error)

}

