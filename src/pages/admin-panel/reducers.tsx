import { SEND, SEND_SUCCESS, SEND_FAILURE, ActionTypes, AdminState } from './types'
import initial from './initial'

function reducers(
  state = initial,
  action: ActionTypes
): AdminState {
  switch (action.type) {
    case SEND:
      return {
        ...state,
        fetching: true,
      };
    case SEND_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case SEND_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}

export default reducers
