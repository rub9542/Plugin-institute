/* eslint-disable no-unused-vars */
import request from 'utils/request'
import initializeApp from 'utils/initializeApp'

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const INSTITUTE_CAMPUS_ID = 'INSTITUTE_CAMPUS_ID'

export const SignInSuccess = token => {
  return {
    type: SIGN_IN_SUCCESS,
    token,
  }
}

export const SetInstituteCampusId = id => {
  return {
    type: INSTITUTE_CAMPUS_ID,
    id,
  }
}

export const SignIn = data => async dispatch => {
  try {
    const authData = await request.post(`/user/login`, data)
    // Mock API, add the origin API and payload data
    initializeApp(authData?.data?.data?.token) // pass the token to this function
    dispatch(SignInSuccess(authData?.data?.data?.token))
    dispatch(SetInstituteCampusId(authData?.data?.data?.institute_id))
  } catch (error) {
    console.error('Getting error while login', error)
  }
}
