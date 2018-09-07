import { DAYS} from './types'

export const getDays = (authToken) => dispatch => {
    console.log("get days")
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': authToken
        }
    }
    return fetch(`https://api-test-book.herokuapp.com/bookamealapi/v1.0/days_of_week`, payload)
        .then(response => response.json())
        .then(data => {
            dispatch(
            {
                type: DAYS,
                payload: data.days
            })
           })
        .catch(error => error)

}
