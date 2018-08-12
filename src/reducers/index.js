import { combineReducers } from  'redux';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import mealReducer from './mealReducer';

const mainReducer = combineReducers({
    user: userReducer,
    orders: orderReducer,
    meals: mealReducer
});

export default mainReducer;
