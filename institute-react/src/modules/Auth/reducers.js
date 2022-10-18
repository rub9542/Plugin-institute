import { SIGN_IN_SUCCESS, INSTITUTE_CAMPUS_ID } from 'modules/Auth/actions'

const initialState = {
  token: null,
  instituteCampusId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
      }
    case INSTITUTE_CAMPUS_ID:
      return {
        ...state,
        instituteCampusId: action.id,
      }
    default:
      return state
  }
}
