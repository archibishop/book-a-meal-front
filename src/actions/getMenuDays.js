import { MENU_DAYS } from './types'

export const getMenuDays = (id) => dispatch => {
    console.log("get menu  days")
    console.log("slapppp")
    let payload = {
        method: 'GET'
    }
    return fetch(`http://127.0.0.1:5000/bookamealapi/v1.0/menu/days/` + id, payload)
        .then(response => response.json())
        .then(data => {
            console.log("data.days_list")
            console.log(data.days_list)
            dispatch(
            {
                type: MENU_DAYS,
                payload: data.days_list
            })
        })
        .catch(error => error)

}

