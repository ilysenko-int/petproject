import { FETCH_PLAYER_SUCCESS, FETCH_PLAYERS, FETCH_PLAYERS_FAILURE, ActionTypes, FETCH_PLAYERS_SUCCESS, PlayersState } from './types'
import initial from './initial'

function reducers(
  state = initial,
  action: ActionTypes
): PlayersState {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        player: initial.player,
        not_existed: false,
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
        player: action.payload
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        ...state,
        fetching: false,
        not_existed: true,
      };
    default:
      return state;
  }
}

export default reducers
