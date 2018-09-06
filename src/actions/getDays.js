import { DAYS} from './types'

export const getDays = (authToken) => dispatch => {
    console.log("get days")
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': authToken
        }
    }
    return fetch(`https://book-a-meal-front.herokuapp.com/bookamealapi/v1.0/days_of_week`, payload)
        .then(response => response.json())
        .then(data => {
            console.log("data.days")
            console.log(data.days)
            dispatch(
            {
                type: DAYS,
                payload: data.days
            })
           })
        .catch(error => error)

}
