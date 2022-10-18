import React from 'react'

import { Form } from 'modules/Students/Partials/AddNewStudentDrawer/Style/style'
import StudentDetails from 'modules/Students/Partials/AddNewStudentDrawer/Partials/StudentDetails'
import CourseDetails from 'modules/Students/Partials/AddNewStudentDrawer/Partials/CourseDetails'
import ContactDetails from 'modules/Students/Partials/AddNewStudentDrawer/Partials/ContactDetails'
import MarksDetails from 'modules/Students/Partials/AddNewStudentDrawer/Partials/MarksDetails'
import {
  StyledDrawer,
  FooterFlex,
} from 'modules/Students/Partials/AddNewStudentDrawer/Style/style'
import Button from 'components/Button'
import CheckIcon from 'components/icons/CheckIcon'

const AddNewStudentDrawer = ({
  newStudentDrawer,
  setNewStudentDrawer,
  form,
  formId = 'student_form',
  title = 'Add New Student',
  sendButtonText = 'Add Student',
  dateFormat,
  onSubmitFormData,
  studentType,
  setStudentType,
  studentDOB,
  setStudentDOB,
  studentBatch,
  setStudentBatch,
  marksType,
  setMarksType,
  onClearAll,
  countryCode,
  setCountryCode,
}) => {
  const onChangeStudentType = e => {
    setStudentType(e.target.value)
  }

  const degreeOptions = [
    {
      id: '1',
      name: 'Bachelor of arts - B.A',
      value: 'B.A',
      degreeType: 'semester',
    },
    {
      id: '2',
      name: 'Bachelor of Engineering - B.E',
      value: 'B.E',
      degreeType: 'semester',
    },
    {
      id: '3',
      name: 'Bachelor of Commerce - B.Com',
      value: 'B.Com',
      degreeType: 'semester',
    },
    {
      id: '4',
      name: 'Bachelor of Technology - B.Tech',
      value: 'B.Tech',
      degreeType: 'semester',
    },
    {
      id: '5',
      name: 'Bachelor of Science - B.Sc',
      value: 'B.Sc',
      degreeType: 'semester',
    },
    {
      id: '6',
      name: 'Bachelor of Pharmacy - B.Pharm',
      value: 'B.Pharm',
      degreeType: 'year',
    },
  ]

  const departmentOptions = [
    {
      id: '1',
      name: 'Computer Science',
      value: 'Computer Science',
    },
    {
      id: '2',
      name: 'Civil',
      value: 'Civil',
    },
    {
      id: '3',
      name: 'Electrical',
      value: 'Electrical',
    },
    {
      id: '4',
      name: 'Electronics and Communication',
      value: 'Electronics and Communication',
    },
    {
      id: '5',
      name: 'Mechanical',
      value: 'Mechanical',
    },
  ]

  const content = () => {
    return (
      <div>
        <Form
          scrollToFirstError
          onFinish={onSubmitFormData}
          id={formId}
          form={form}
          layout="vertical"
        >
          <StudentDetails
            studentType={studentType}
            setStudentType={setStudentType}
            onChangeStudentType={onChangeStudentType}
            studentDOB={studentDOB}
            setStudentDOB={setStudentDOB}
            dateFormat={dateFormat}
          />
          <CourseDetails
            studentType={studentType}
            studentBatch={studentBatch}
            setStudentBatch={setStudentBatch}
            degreeOptions={degreeOptions}
            departmentOptions={departmentOptions}
            setMarksType={setMarksType}
          />
          {studentBatch?.endedOn && (
            <MarksDetails
              studentBatch={studentBatch}
              marksType={marksType}
              degreeOptions={degreeOptions}
            />
          )}
          <ContactDetails
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />
        </Form>
      </div>
    )
  }

  const footer = () => {
    return (
      <FooterFlex right>
        <Button.Secondary
          text="Cancel"
          onClick={() => setNewStudentDrawer(false)}
        />
        <Button.Primary
          htmlType="submit"
          form={formId}
          text={sendButtonText}
          icon={<CheckIcon />}
        />
      </FooterFlex>
    )
  }
  return (
    <>
      <StyledDrawer
        title={title}
        placement="right"
        closable={true}
        onClose={() => {
          setNewStudentDrawer(false)
          onClearAll()
        }}
        visible={newStudentDrawer}
        content={content()}
        footer={footer()}
      />
    </>
  )
}

export default AddNewStudentDrawer
