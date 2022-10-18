import {
  SET_STUDENTS_LIST,
  SET_SINGLE_STUDENTS_DATA,
} from 'modules/Students/actions'

const initialState = {
  studentsList: [],
  singleStudentData: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS_LIST:
      return {
        ...state,
        studentsList: action.data,
      }
    case SET_SINGLE_STUDENTS_DATA:
      return {
        ...state,
        singleStudentData: action.data,
      }
    default:
      return state
  }
}
