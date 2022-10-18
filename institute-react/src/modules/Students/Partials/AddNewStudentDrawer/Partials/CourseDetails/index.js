import React from 'react'
import Input from 'components/Form/Input'
import { StyledRange } from 'components/DatePickerStyles/DatePickerStyles'
import moment from 'moment'
import {
  FormItem,
  SectionHeading,
} from 'modules/Students/Partials/AddNewStudentDrawer/Style/style'
import Select from 'components/Select'
import Label from 'components/Form/Label'
import SeperatorIcon from 'components/icons/SeperatorIcon'
import CalendarIcon from 'components/icons/CalendarIcon'

const CourseDetails = ({
  degreeOptions,
  departmentOptions,
  studentType,
  studentBatch,
  setStudentBatch,
  setMarksType,
}) => {
  const onBatchChange = (value, years) => {
    setStudentBatch({
      startedOn: years[0],
      endedOn: years[1],
    })
  }

  const onDegreeChange = e => {
    setMarksType(e)
  }
  return (
    <>
      <SectionHeading>Course Details</SectionHeading>
      {studentType == 'transferred' ? (
        <>
          <Input
            width="100%"
            label="Previous College"
            placeholder="Eg. Aryabhatt Institute of Technology"
            optional={'*'}
            name={'previous_college'}
            rules={[
              {
                required: true,
                message: 'Please enter previous college name!',
              },
            ]}
          />

          <Input
            width="100%"
            label="Previous University"
            placeholder="Eg. Guru Gobind Singh Indraprastha University"
            optional={'*'}
            name={'previous_university'}
            rules={[
              {
                required: true,
                message: 'Please enter previous university name!',
              },
            ]}
          />
        </>
      ) : (
        ''
      )}
      <div>
        <FormItem
          name="degree"
          rules={[{ required: true, message: 'Please enter degree name!' }]}
        >
          <Select
            label="Degree Name *"
            valueParam={'value'}
            placeholder="Eg. Bachlore of Engineering - B.E"
            OptionData={degreeOptions}
            optionLabelProp="name"
            onChange={onDegreeChange}
          />
        </FormItem>
      </div>

      <div>
        <FormItem
          name="department"
          rules={[{ required: true, message: 'Please enter department name!' }]}
        >
          <Select
            valueParam={'value'}
            label="Department Name *"
            placeholder="Eg. Computer Science"
            OptionData={departmentOptions}
          />
        </FormItem>
      </div>

      <div>
        <Label required={true}>
          Batch <span>*</span>
        </Label>
        <FormItem
          name="batch"
          rules={[
            { type: 'array', required: true, message: 'Please enter batch!' },
          ]}
        >
          <StyledRange
            width="50%"
            picker="year"
            placeholder={['YYYY', 'YYYY']}
            separator={<SeperatorIcon />}
            suffixIcon={<CalendarIcon />}
            onChange={onBatchChange}
          />
        </FormItem>
      </div>
    </>
  )
}

export default CourseDetails
