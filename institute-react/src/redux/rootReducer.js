import { combineReducers } from 'redux'
import authReducer from 'modules/Auth/reducers'
import instituteReducer from 'modules/Students/reducers'

export default combineReducers({
  auth: authReducer,
  institute: instituteReducer,
})
