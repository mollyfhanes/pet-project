import ACTIONS from './actions'

const defaultState = {
  pets: [],
  loaded: false,
  token: null,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_PETS: {
      const pets = action.payload
      const loaded = true
      return { ...state, pets, loaded }
    }

    case ACTIONS.GET_TOKEN: {
      const token = action.payload
      return { ...state, token }
    }

    case ACTIONS.ERROR: {
      const error = action.payload
      return state
    }

    default:
      return state
  }
}

export default reducer
