import React, { useState } from 'react'
import Flex from 'components/Flex'
import SearchInput from 'components/SearchInput'
import StudentFilter from 'modules/Students/Partials/StudentsInfoTable/StudentFilter'
import StudentStatus from 'modules/Students/Partials/StudentsInfoTable/StudentStatus'
import ProgressCircle from 'components/ProgressCircle'
import ActionsStudent from 'modules/Students/Partials/StudentsInfoTable/ActionsStudent'
import { StyledTable } from 'components/TableStyles/TableStyles'
import BlacklistIcon from 'components/icons/BlacklistIcon'
import CustomTooltip from 'components/CustomTooltip'

import {
  NavWrapper,
  TableTop,
  StyledP,
  OverlayFlex,
} from 'modules/Students/Partials/StudentsInfoTable/Style/style'

import { FilterText } from 'components/FilterDiv'

const StudentsInfoTable = ({
  studentsList,
  getSingleStudentData,
  deleteStudent,
  singleStudentData,
  onEditStudent,
}) => {
  const [selectedRows, setSelectedRows] = useState([])

  const columns = [
    {
      title: 'Roll Number',
      dataIndex: 'uniRollNo',
      sorter: true,
      sortDirections: ['descend'],
      render: text => (
        <Flex spaceBetween>
          <StyledP textType="uppercase">{text}</StyledP>
          {/* <CustomTooltip
            overlay={
              <OverlayFlex>
                <StyledP>Blacklisted for</StyledP>
              </OverlayFlex>
            }
            content={
              <div>
                <BlacklistIcon />
              </div>
            }
          /> */}
        </Flex>
      ),
    },
    {
      title: 'Student Name',
      dataIndex: 'firstName',
      sorter: true,
      sortDirections: ['descend'],
      render: (text, item) => (
        <StyledP>
          {item?.firstName} {item?.middelName} {item?.lastName}
        </StyledP>
      ),
    },
    {
      title: 'Batch',
      dataIndex: 'batch',
      sorter: true,
      sortDirections: ['descend'],
      render: text => <StyledP>{text}</StyledP>,
    },
    {
      title: 'Deg & Department',
      dataIndex: 'deg_department',
      sorter: true,
      sortDirections: ['descend'],
      render: (text, data) => (
        <StyledP>
          {data?.currentCourse[0]?.degree} -
          <span>{data?.currentCourse[0]?.department}</span>
        </StyledP>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: status => <StudentStatus status={status} />,
    },
    {
      title: 'completion',
      dataIndex: 'profileCompletionPerc',
      render: data => <ProgressCircle progressRate={data} width="30px" />,
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id, data) => (
        <ActionsStudent
          studentId={id}
          data={data}
          getSingleStudentData={getSingleStudentData}
          deleteStudent={deleteStudent}
          singleStudentData={singleStudentData}
          onEditStudent={onEditStudent}
        />
      ),
    },
  ]
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows)
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: record => ({
      disabled: record.roles === 'Disabled User',
      // Column configuration not to be checked
      roles: record.roles,
    }),
  }

  return (
    <NavWrapper column>
      <TableTop centerVertically>
        <SearchInput
          width={'25%'}
          placeholder="Search by keyword"
          bordered={false}
        />
        <StudentFilter />
        <FilterText>
          Showing {studentsList?.count > '10' ? '10' : studentsList?.count} 0f{' '}
          {studentsList?.count}
        </FilterText>
      </TableTop>
      <StyledTable
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        rowKey="id"
        columns={columns}
        dataSource={studentsList?.result}
      />
    </NavWrapper>
  )
}

export default StudentsInfoTable
