import { connect } from 'react-redux'
import Students from 'modules/Students/index'

import instSelector from 'modules/Students/selectors'

import {
  getStudentsListData,
  createStudent,
  getSingleStudentData,
  deleteStudent,
  editStudent,
} from 'modules/Students/actions'

const mapStateToProps = state => ({
  studentsList: instSelector.getStudentsList(state),
  singleStudentData: instSelector.getSingleStudentData(state),
})

const mapDispatchToProps = {
  getStudentsListData,
  createStudent,
  getSingleStudentData,
  deleteStudent,
  editStudent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
