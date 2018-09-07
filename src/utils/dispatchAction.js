import Notifications, { notify } from 'react-notify-toast';

export const dispatchAction = (url, payload, action, dispatch) => {

    return fetch(url, payload)
        .then(response => response.json())
        .then(data => {
            dispatch(
                {
                    type: action,
                    payload: data
                }
            );
            if (typeof data.message !== undefined){
                notify.show(data.message, 'success', 5000);
            }
        }
        )
        .catch(error => error)
}

