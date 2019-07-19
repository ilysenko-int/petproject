
import wrapper from '../container/index';
import home from '../pages/home/index';
import players from '../pages/players/index';
import shop from '../pages/shop/index';
import booking from '../pages/booking/index';
import news from '../pages/news/index';
import admin from '../pages/admin-panel/index';

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';

const initialState = {
    [wrapper.consts.KEY]: (state: object = wrapper.initial) => state,
    [home.consts.KEY]: (state: object = home.initial) => state,
    [players.consts.KEY]: (state: object = players.initial) => state,
    [shop.consts.KEY]: (state: object = shop.initial) => state,
    [booking.consts.KEY]: (state: object = booking.initial) => state,
    [news.consts.KEY]: (state: object = news.initial) => state,
    [admin.consts.KEY]: (state: object = admin.initial) => state,
};

const rootReducer = combineReducers({
    ...initialState,
    news: news.reducers,
    players: players.reducers,
    admin: admin.reducers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [ReduxThunk, apiMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}