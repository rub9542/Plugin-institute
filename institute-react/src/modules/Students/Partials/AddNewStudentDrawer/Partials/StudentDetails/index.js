import React from 'react'
import Input from 'components/Form/Input'

import {
  FormItem,
  TwoFields,
  Date,
  RadioGroup,
  StyledRadio,
} from 'modules/Students/Partials/AddNewStudentDrawer/Style/style'
import Label from 'components/Form/Label'
import CalendarIcon from 'components/icons/CalendarIcon'

const StudentDetails = ({
  studentType,
  onChangeStudentType,
  studentDOB,
  setStudentDOB,
  dateFormat = 'YYYY-MM-DD',
}) => {
  const onDOBChange = (date, dateString) => {
    setStudentDOB(dateString)
  }
  return (
    <>
      <TwoFields spaceBetween>
        <Input
          width="47%"
          label="First Name"
          placeholder="Eg. Vikram"
          optional={'*'}
          name={'firstName'}
          rules={[
            {
              required: true,
              message: 'Please enter first name!',
            },
          ]}
        />
        <Input
          width="47%"
          label="Last Name"
          placeholder="Eg. Sharma"
          optional={'*'}
          name={'lastName'}
          rules={[
            {
              required: true,
              message: 'Please enter last name!',
            },
          ]}
        />
      </TwoFields>

      <Input
        width="100%"
        label="Roll Number"
        placeholder="Eg. S123456780"
        optional={'*'}
        name={'uniRollNo'}
        rules={[
          {
            required: true,
            message: 'Please enter roll number!',
          },
        ]}
      />

      <div>
        <Label required={true}>
          D.O.B <span>*</span>
        </Label>
        <FormItem
          name="dob"
          rules={[{ required: true, message: 'Please enter date of birth!' }]}
        >
          <Date
            suffixIcon={<CalendarIcon />}
            id="date_of_birth"
            width="50%"
            color="#010E30"
            opacity="1"
            placeholder={dateFormat}
            format={dateFormat}
            onChange={onDOBChange}
          />
        </FormItem>
      </div>

      <div>
        <Label required={true}>
          Type <span>*</span>
        </Label>

        <FormItem
          name="type"
          rules={[
            {
              required: true,
              message: 'Please Choose any type!',
            },
          ]}
        >
          <RadioGroup value={studentType} onChange={onChangeStudentType}>
            <StyledRadio boxed={true} value={'regular'} label="Regular" />
            <StyledRadio
              boxed={true}
              value={'lateral_entry'}
              label="Lateral Entry"
            />
            <StyledRadio
              boxed={true}
              value={'transferred'}
              label="Transferred"
            />
          </RadioGroup>
        </FormItem>
      </div>
    </>
  )
}

export default StudentDetails
