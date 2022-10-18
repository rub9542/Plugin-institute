import instituteRequest from 'utils/instituteRequest'
import instituteSelector from 'modules/Auth/selectors'
import SuccessMessage from '../../utils/SuccessMessage'

export const SET_STUDENTS_LIST = 'institute/SET_STUDENTS_LIST'
export const SET_SINGLE_STUDENTS_DATA = 'institute/SET_SINGLE_STUDENTS_DATA'

export const setStudentsList = data => {
  return {
    type: SET_STUDENTS_LIST,
    data,
  }
}

export const setSingleStudentData = data => {
  return {
    type: SET_SINGLE_STUDENTS_DATA,
    data,
  }
}

export const getStudentsListData = () => async (dispatch, getState) => {
  const state = getState()
  const institute_id = instituteSelector.getInstituteCampusId(state)

  try {
    const data = await instituteRequest.post(
      `/students/${institute_id}/lists`,
      {}
    )
    dispatch(setStudentsList(data?.data?.data || []))
  } catch (error) {
    console.log('Error in getting list of students', error)
  }
}

export const createStudent =
  (data, setPrevDrawer, onClearAll) => async (dispatch, getState) => {
    const state = getState()
    const institute_id = instituteSelector.getInstituteCampusId(state)
    const course_id = instituteSelector.getInstituteCampusId(state)
    try {
      await instituteRequest.post(
        `/students/${institute_id}/${course_id}`,
        data
      )
      dispatch(getStudentsListData())
      onClearAll()
      SuccessMessage('Student Added successfully.')
      setPrevDrawer(false)
    } catch (error) {
      console.log('Error in adding student', error)
    }
  }

export const getSingleStudentData =
  student_id => async (dispatch, getState) => {
    try {
      const res = await instituteRequest.get(`/students/${student_id}`)
      dispatch(setSingleStudentData(res?.data?.data || {}))
      return true
    } catch (error) {
      console.log('Error in item', error)
    }
  }

export const deleteStudent = student_id => async (dispatch, getState) => {
  try {
    console.log('dataa', student_id)
    await instituteRequest.delete(`/students/${student_id}`)
    dispatch(getStudentsListData())
    SuccessMessage('Student deleted successfully.')
  } catch (error) {
    console.log('Error in delete item', error)
  }
}

export const editStudent =
  (student_id, data, setPrevDrawer, onClearAll) =>
  async (dispatch, getState) => {
    try {
      await instituteRequest.put(`/students/${student_id}`, data)
      dispatch(getStudentsListData())
      onClearAll()
      SuccessMessage('Student Edited successfully.')
      setPrevDrawer(false)
    } catch (error) {
      console.log('Error in adding student', error)
    }
  }
