const getStudentsList = state => state?.institute?.studentsList
const getSingleStudentData = state => state?.institute?.singleStudentData

const selectors = {
  getStudentsList,
  getSingleStudentData,
}

export default selectors
