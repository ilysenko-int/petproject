import { FETCH_NEWS_SUCCESS, FETCH_NEWS, FETCH_NEWS_FAILURE, ActionTypes, NewsState } from './types'
import initial from './initial'

function reducers(
  state = initial,
  action: ActionTypes
): NewsState {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}

export default reducers
