import React, { useEffect, useState } from 'react'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import PercentIcon from 'components/icons/PercentIcon'
import {
  SectionHeading,
  MarksFlex,
  FormItem,
} from 'modules/Students/Partials/AddNewStudentDrawer/Style/style'

const MarksDetails = ({ studentBatch, marksType, degreeOptions }) => {
  const [currentMarksList, setCurrentMarksList] = useState([])

  const yearMarksList = [
    {
      id: 1,
      label: '1st Year',
      tagName: 'first_marks',
    },
    {
      id: 2,
      label: '2nd Year',
      tagName: 'second_marks',
    },
    {
      id: 3,
      label: '3rd Year',
      tagName: 'third_marks',
    },
    {
      id: 4,
      label: '4th Year',
      tagName: 'four_marks',
    },
  ]
  const triSemMarksList = [
    {
      id: 1,
      label: '1st Semester',
      tagName: 'first_marks',
    },
    {
      id: 2,
      label: '2nd Semester',
      tagName: 'second_marks',
    },
    {
      id: 3,
      label: '3rd Semester',
      tagName: 'third_marks',
    },
    {
      id: 4,
      label: '4th Semester',
      tagName: 'four_marks',
    },
    {
      id: 5,
      label: '5th Semester',
      tagName: 'five_marks',
    },
    {
      id: 6,
      label: '6th Semester',
      tagName: 'six_marks',
    },
  ]

  const semMarksList = [
    {
      id: 1,
      label: '1st Semester',
      tagName: 'first_marks',
    },
    {
      id: 2,
      label: '2nd Semester',
      tagName: 'second_marks',
    },
    {
      id: 3,
      label: '3rd Semester',
      tagName: 'third_marks',
    },
    {
      id: 4,
      label: '4th Semester',
      tagName: 'four_marks',
    },
    {
      id: 5,
      label: '5th Semester',
      tagName: 'five_marks',
    },
    {
      id: 6,
      label: '6th Semester',
      tagName: 'six_marks',
    },
    {
      id: 7,
      label: '7th Semester',
      tagName: 'seven_marks',
    },
    {
      id: 8,
      label: '8th Semester',
      tagName: 'eight_marks',
    },
  ]

  useEffect(() => {
    if (
      degreeOptions?.filter(item => marksType === item?.value)[0]?.degreeType ==
      'semester'
    ) {
      setCurrentMarksList(semMarksList)
    } else {
      setCurrentMarksList(yearMarksList)
    }
  }, [marksType])
  return (
    <>
      <SectionHeading>Marks</SectionHeading>

      {currentMarksList?.map((item, index) => (
        <MarksFlex spaceBetween key={index}>
          <Label marginTop={'10px'} required={true}>
            {item?.label}
          </Label>
          <Input
            width="50%"
            placeholder="00"
            type="text"
            name={['marks', index, 'mark']}
            rules={[
              {
                required: true,
                message: 'required',
              },
              {
                pattern: new RegExp(/^[1-9]$|^[1-9][0-9]$|^(100)$/),
                message: 'not valid',
              },
            ]}
            suffix={<PercentIcon />}
          />
        </MarksFlex>
      ))}

      <MarksFlex spaceBetween>
        <Label marginTop={'10px'} required={true}>
          Arrears
        </Label>
        <Input
          width="50%"
          placeholder="00"
          type="text"
          name={'noOfArrears'}
          rules={[
            {
              required: true,
              message: 'required',
            },
            {
              pattern: new RegExp(/^[0-9]||[0-9]$/),
              message: 'not valid',
            },
          ]}
        />
      </MarksFlex>
    </>
  )
}

export default MarksDetails
