import React, { useState, useEffect } from 'react'

import Button from 'components/Button/index'
import { Dropdown, Menu, Form } from 'antd'
import PlusIcon from 'components/icons/PlusIcon'
import SettingsIcon from 'components/icons/SettingsIcon'
import VerticalThreeDots from 'components/icons/VerticalThreeDots'
import UserDefaultIcon from 'components/icons/UserDefaultIcon'
import UserBlockIcon from 'components/icons/UserBlockIcon'
import InfoCards from 'components/InfoCards'
import StudentsInfoTable from 'modules/Students/Partials/StudentsInfoTable'
import moment from 'moment'
import {
  SectionWrapper,
  TopHeader,
  TopHeading,
  TopRightFlex,
  SmallButtons,
  CardRow,
} from 'modules/Students/Style/style'
import AddNewStudentDrawer from 'modules/Students/Partials/AddNewStudentDrawer'
import SettingsDrawer from 'modules/Students/Partials/SettingsDrawer'

const Students = ({
  studentsList,
  getStudentsListData,
  createStudent,
  getSingleStudentData,
  singleStudentData,
  deleteStudent,
  editStudent,
  ...props
}) => {
  const [createEditForm] = Form.useForm()

  const [cardsData, setCardsData] = useState([])
  const [newStudentDrawer, setNewStudentDrawer] = useState(false)
  const [settingDrawer, setsettingDrawer] = useState(false)
  const [isEditingForm, setIsEditingForm] = useState(false)
  const [currentStudentId, setCurrentStudentId] = useState('')
  const [countryCode, setCountryCode] = useState('+91')

  const [studentType, setStudentType] = useState('')
  const [studentDOB, setStudentDOB] = useState('')
  const [studentBatch, setStudentBatch] = useState({
    startedOn: '',
    endedOn: '',
  })

  const [marksType, setMarksType] = useState('')

  const dateFormat = 'YYYY-MM-DD'

  useEffect(() => {
    getStudentsListData()
  }, [])

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Bulk Upload',
        },
        {
          key: '2',
          label: 'Delete',
          disabled: true,
        },
      ]}
    />
  )
  useEffect(() => {
    const cardData = [
      {
        key: 1,
        icon: <UserDefaultIcon />,
        text: 'Active Students',
        value: 0,
      },
      {
        key: 2,
        icon: <UserDefaultIcon />,
        text: 'Inactive Students',
        value: 0,
      },
      {
        key: 3,
        icon: <UserDefaultIcon />,
        text: 'Incomplete Profile',
        value: 0,
      },
      {
        key: 4,
        icon: <UserDefaultIcon />,
        text: 'Not Interested',
        value: 0,
      },
      {
        key: 5,
        icon: <UserDefaultIcon />,
        text: 'Passed Out',
        value: 0,
      },
      {
        key: 6,
        icon: <UserBlockIcon />,
        text: 'Blacklisted',
        value: 0,
      },
    ]
    setCardsData(cardData)
  }, [])

  useEffect(() => {
    if (isEditingForm) {
      setStudentDOB(singleStudentData?.admin?.dob)
      setStudentBatch({
        startedOn: singleStudentData?.currentCourse?.startedOn,
        endedOn: singleStudentData?.currentCourse?.endedOn,
      })
      setStudentType(singleStudentData?.currentCourse?.admissionType)
      setCountryCode(singleStudentData?.admin?.country_code)

      createEditForm.setFieldsValue({
        firstName: singleStudentData?.firstName,
        lastName: singleStudentData?.lastName,
        uniRollNo: singleStudentData?.uniRollNo,
        dob: moment(singleStudentData?.admin?.dob, dateFormat),
        type: singleStudentData?.currentCourse?.admissionType,
        previous_college: singleStudentData?.currentCourse?.previousCollege,
        previous_university:
          singleStudentData?.currentCourse?.previousUniversity,
        degree: singleStudentData?.currentCourse?.degree,
        department: singleStudentData?.currentCourse?.department,
        batch: [
          moment(singleStudentData?.currentCourse?.startedOn, 'YYYY'),
          moment(singleStudentData?.currentCourse?.endedOn, 'YYYY'),
        ],
        email: singleStudentData?.admin?.email,
        contactNumber: singleStudentData?.admin?.phone_number,
        noOfArrears: singleStudentData?.currentCourse?.noOfArrears,
        marks: singleStudentData?.currentCourse?.marks,
      })
    }
  }, [singleStudentData])

  const onEditStudent = id => {
    setCurrentStudentId(id)
    setIsEditingForm(true)
    setNewStudentDrawer(true)
    getSingleStudentData(id)
  }

  const onSubmitFormData = data => {
    console.log('data', data)
    const reqData = {
      admin: {
        email: data?.email,
        phoneNumber: data?.contactNumber,
        firstName: data?.firstName,
        lastName: data?.lastName,
        dob: studentDOB,
      },
      student: {
        uniRollNo: data?.uniRollNo,
        batch: `${studentBatch?.startedOn}-${studentBatch?.endedOn}`,
      },
      studentPersonalProfile: {
        dob: studentDOB,
        secondaryEmail: data?.email,
        contactNumber: data?.contactNumber,
      },
      currentCourse: {
        admissionType: data?.type,
        previousCollege:
          data?.type == 'transferred' ? data?.previous_college : null,
        previousUniversity:
          data?.type == 'transferred' ? data?.previous_university : null,
        degree: data?.degree,
        department: data?.department,
        startedOn: studentBatch?.startedOn,
        endedOn: studentBatch?.endedOn,
        marks: data?.marks?.map((item, index) => {
          return {
            sem: `semester_${index + 1}`,
            mark: Number(item?.mark),
          }
        }),
        noOfArrears: Number(data?.noOfArrears),
        attendanceBacklisted: false,
        conductBacklisted: false,
        collegeFeeBacklisted: false,
      },
      education: [],
      resume: {},
    }
    if (isEditingForm) {
      editStudent(currentStudentId, reqData, setNewStudentDrawer, onClearAll)
    } else {
      createStudent(reqData, setNewStudentDrawer, onClearAll)
    }
  }

  const onClearAll = () => {
    createEditForm.resetFields()
    setIsEditingForm(false)
    setStudentType('')
    setCurrentStudentId('')
    setStudentDOB('')
    setStudentBatch({
      startedOn: '',
      endedOn: '',
    })
    setCountryCode('+91')
  }

  return (
    <>
      <SectionWrapper column>
        <TopHeader row spaceBetween alignCenter>
          <TopHeading flexStart>Manage Students</TopHeading>
          <TopRightFlex>
            <Button.Primary
              height={'38px'}
              text={'New Student'}
              icon={<PlusIcon />}
              onClick={() => {
                setIsEditingForm(false)
                setNewStudentDrawer(true)
              }}
            />
            <SmallButtons
              height={'38px'}
              icon={<SettingsIcon />}
              onClick={() => setsettingDrawer(true)}
            />
            <Dropdown overlay={menu}>
              <SmallButtons height={'38px'} icon={<VerticalThreeDots />} />
            </Dropdown>
          </TopRightFlex>
        </TopHeader>

        <CardRow spaceBetween>
          {cardsData?.map(card => (
            <InfoCards
              key={card?.key}
              width={'13em'}
              icon={card?.icon}
              text={card?.text}
              value={card?.value}
            />
          ))}
        </CardRow>

        <StudentsInfoTable
          studentsList={studentsList}
          getSingleStudentData={getSingleStudentData}
          deleteStudent={deleteStudent}
          singleStudentData={singleStudentData}
          onEditStudent={onEditStudent}
        />
      </SectionWrapper>

      <AddNewStudentDrawer
        newStudentDrawer={newStudentDrawer}
        setNewStudentDrawer={setNewStudentDrawer}
        form={createEditForm}
        onSubmitFormData={onSubmitFormData}
        studentType={studentType}
        setStudentType={setStudentType}
        studentDOB={studentDOB}
        setStudentDOB={setStudentDOB}
        studentBatch={studentBatch}
        setStudentBatch={setStudentBatch}
        marksType={marksType}
        setMarksType={setMarksType}
        title={isEditingForm ? 'Edit & Update Student' : 'Add New Student'}
        sendButtonText={isEditingForm ? 'Update Student' : 'Add Student'}
        formId={isEditingForm ? 'edit_form' : 'add_form'}
        dateFormat={dateFormat}
        onClearAll={onClearAll}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
      />

      <SettingsDrawer
        settingDrawer={settingDrawer}
        setsettingDrawer={setsettingDrawer}
      />
    </>
  )
}
export default Students
