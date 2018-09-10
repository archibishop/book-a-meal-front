import { LOG_OUT } from './types'

export const logout = () => dispatch => {
    
    return  dispatch(
                {
                    type: LOG_OUT,
                    payload: "clear data"
                })
}

