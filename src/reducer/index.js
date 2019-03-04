import { combineReducers } from 'redux'
import userReducer from '../pages/users/reducers'

const rootReducer = combineReducers(
  Object.assign(
    {},
    {
      users: userReducer,
    }
  )
)

export default rootReducer
