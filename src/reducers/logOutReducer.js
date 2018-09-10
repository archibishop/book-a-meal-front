import { LOG_OUT } from '../actions/types';
import { mainReducer } from './index/mainReducer'

const intialState = {
}

export default function getMenuDaysReducer(state = intialState, action) {
    switch (action.type) {
        case LOG_OUT:
            state = undefined
    }
    return mainReducer(state, action);
}
