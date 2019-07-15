import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'


import Routes from './routes';

// connect pages stores
import App from './container/wrappers/App';
import wrapper from './container/index';
import home from './pages/home/index';
import players from './pages/players/index';
import shop from './pages/shop/index';
import booking from './pages/booking/index';

const middlewares = [ReduxThunk, apiMiddleware]

const initialReducers = {
    [wrapper.consts.KEY]: (state: object = wrapper.initial) => state,
    [home.consts.KEY]: (state: object = home.initial) => state,
    [players.consts.KEY]: (state: object = players.initial) => state,
    [shop.consts.KEY]: (state: object = shop.initial) => state,
    [booking.consts.KEY]: (state: object = booking.initial) => state,
};

const reducers = combineReducers({
    ...initialReducers,
    [wrapper.consts.KEY]: wrapper.reducers,
    [home.consts.KEY]: home.reducers,
    [players.consts.KEY]: players.reducers,
    [shop.consts.KEY]: shop.reducers,
    [booking.consts.KEY]: booking.reducers,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
/* eslint-enable */


ReactDOM.render((<Provider store={store}><Router><App routes={Routes} /></Router></Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
