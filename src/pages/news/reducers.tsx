import { FETCH_NEWS_SUCCESS, FETCH_NEWS, FETCH_NEWS_FAILURE, ActionTypes, NewsState, FETCH_ARTICLE_SUCCESS } from './types'
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
        not_existed_article: false,
        article: initial.article
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        fetching: false,
        not_existed_article: false,
        data: action.payload
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        fetching: false,
        not_existed_article: false,
        article: action.payload
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        not_existed_article: true,
        fetching: false,
      };
    default:
      return state;
  }
}

export default reducers
