import { MENU_DAYS } from './types'

export const getMenuDays = (id) => dispatch => {
    console.log("get menu days")
    console.log("slapppp")
    let payload = {
        method: 'GET',
        headers: {
            'x-access-token': localStorage.getItem('x-access-token')
        }
    }
    return fetch(`https://api-test-book.herokuapp.com/bookamealapi/v1.0/menu/days/` + id, payload)
        .then(response => response.json())
        .then(data => {
            // get menu days
            dispatch(
            {
                type: MENU_DAYS,
                payload: data.days_list
            })
        })
        .catch(error => error)

}

