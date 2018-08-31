import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import mainReducer from './reducers/index'
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import history from './utils/history'
import App from './components/App'

let store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store} history={history}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

export default store;
