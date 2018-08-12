import { combineReducers } from  'redux';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import mealReducer from './mealReducer';
import makeOrderReducer from './makeOrderReducer';
import deleteOrderReducer from './deleteOrderReducer';
import updateOrderReducer from './updateOrderReducer';

const mainReducer = combineReducers({
    user: userReducer,
    orders: orderReducer,
    meals: mealReducer,
    order: makeOrderReducer,
    deleteOrder: deleteOrderReducer,
    updateOrder: updateOrderReducer
});

export default mainReducer;
