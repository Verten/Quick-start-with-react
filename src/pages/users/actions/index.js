export function fetchUsersError(error) {
  return {
    type: 'FETCH_USERS_ERROR',
    error,
  }
}

export function fetchUsersRequest() {
  return {
    type: 'FETCH_USERS_REQUEST',
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users,
  }
}

export function fetchUserByIdRequest(id) {
  return {
    type: 'FETCH_USER_BY_ID_REQUEST',
    id,
  }
}

export function fetchUserByIdError(error) {
  return {
    type: 'FETCH_USER_BY_ID_ERROR',
    error,
  }
}

export function fetchUserByIdSuccess(user) {
  return {
    type: 'FETCH_USER_BY_ID_SUCCESS',
    user,
  }
}
