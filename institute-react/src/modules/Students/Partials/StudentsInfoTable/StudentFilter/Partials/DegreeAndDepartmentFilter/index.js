import React, { useState } from 'react'
import CollapseCheckBox from 'components/UIComponents/CollapseCheckBox'

const DegreeAndDepartmentFilter = () => {
  const [beCheckedList, setBECheckedList] = useState([])
  const [bTechCheckedList, setBTechCheckedList] = useState([])

  const options = [
    'Computer Engineer',
    'Mechanical',
    'Civil',
    'Chemical',
    'Electrical and electronic',
    'Electronic and communication',
  ]
  const option2 = [
    'Aeronautical Engineering',
    'Automobile Engineering',
    'Biotechnology',
    'Civil Engineering',
    'Computer Science and Engineering',
    'Mechanical Engineering',
  ]

  return (
    <>
      <CollapseCheckBox
        plainOptions={options}
        headerText={'Bachelor of Engineering - B.E'}
        checkedList={beCheckedList}
        setCheckedList={setBECheckedList}
      />
      <CollapseCheckBox
        plainOptions={option2}
        headerText={'Bachelor of Technology - B.Tech'}
        checkedList={bTechCheckedList}
        setCheckedList={setBTechCheckedList}
      />
    </>
  )
}

export default DegreeAndDepartmentFilter
