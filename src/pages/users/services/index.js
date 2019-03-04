/**
 * this API is using by portal front-end to call portal back-end
 */
import { callAPI } from '../../../utilities'
import { all, call, put, fork, takeLatest } from 'redux-saga/effects'
import * as Actions from '../actions'

const host = 'https://api.github.com'
const contextPath = ''
const fetchUsersPath = '/users'

function* fetchUsers() {
  const url = `${host}${contextPath}${fetchUsersPath}`
  try {
    const users = yield call(callAPI, url)
    yield put(Actions.fetchUsersSuccess(users))
  } catch (e) {
    yield put(Actions.fetchUsersError(e))
  }
}

function* fetchUserById(action) {
  const url = `${host}${contextPath}${fetchUsersPath}/${action.id}`
  try {
    const user = yield call(callAPI, url)
    yield put(Actions.fetchUserByIdSuccess(user))
  } catch (e) {
    yield put(Actions.fetchUserByIdError(e))
  }
}

export function* watchFetchUsers() {
  yield takeLatest(Actions.fetchUsersRequest().type, fetchUsers)
}

export function* watchFetchUserById() {
  yield takeLatest(Actions.fetchUserByIdRequest().type, fetchUserById)
}

export default function* userRootSaga() {
  yield all([fork(watchFetchUsers), fork(watchFetchUserById)])
}
