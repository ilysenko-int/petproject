import consts from './consts'
import initial from './initial'

export const actionHandlers = {
  [consts.FETCH_REQUEST]: (state: object) => ({
    ...state,
    fetching: true,
  }),
  [consts.FETCH_SUCCESS]: (state: object, action: any) => {
    return {
      ...state,
      fetching: false,
    }
  },
  [consts.FETCH_FAILURE]: (state: object) => ({
    ...state,
    fetching: true,
  })
}

export const reducers = (state: object = initial, action: any) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers