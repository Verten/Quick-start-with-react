const initialState = {
  isProcessing: false,
  usersList: null,
  currentUser: null,
  error: null,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
    case 'FETCH_USER_BY_ID_REQUEST':
      return Object.assign({}, state, {
        isProcessing: true,
        error: null,
      })
    case 'FETCH_USERS_ERROR':
    case 'FETCH_USER_BY_ID_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        isProcessing: false,
      })
    case 'FETCH_USERS_SUCCESS':
      return Object.assign({}, state, {
        usersList: action.users,
        isProcessing: false,
        error: null,
      })
    case 'FETCH_USER_BY_ID_SUCCESS':
      return Object.assign({}, state, {
        currentUser: action.user,
        isProcessing: false,
        error: null,
      })
    default:
      return state
  }
}

export default userReducer
