import { FETCH_PLAYER_SUCCESS, FETCH_PLAYERS, FETCH_PLAYERS_FAILURE, ActionTypes, FETCH_PLAYERS_SUCCESS } from './types'
import initial from './initial'

function reducers(
  state = initial,
  action: ActionTypes
): PlayersState {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    case FETCH_PLAYER_SUCCESS:
      return {
        ...state,
        fetching: false,
        article: action.payload
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}

export default reducers
