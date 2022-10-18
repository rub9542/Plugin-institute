import React, { useState } from 'react'
import DownArrow from 'components/icons/DownArrow'
import { Dropdown } from 'antd'
import VerticalThreeDots from 'components/icons/VerticalThreeDots'

import {
  StyledDropDownButton,
  ButtonText,
  Main,
  ActionMenu,
  ActionMenuItem,
  ItemText,
  ItemDeleteText,
  SmallStyleDivider,
  SmallButtons,
} from 'components/ActionStyles/ActionStyles'
import ViewStudentDrawer from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer'
import BlacklistDrawer from 'modules/Students/Partials/StudentsInfoTable/BlacklistDrawer'

const ActionsStudent = ({
  needViewButton = true,
  studentId,
  getSingleStudentData,
  deleteStudent,
  singleStudentData,
  onEditStudent,
  data,
}) => {
  const [viewDrawer, setViewDrawer] = useState(false)
  const [blacklistDrawer, setBlacklistDrawer] = useState(false)

  const handleMenuClick = id => {
    setViewDrawer(true)
    getSingleStudentData(id)
  }

  const handleBlacklist = () => {
    setViewDrawer(false)
    setBlacklistDrawer(true)
  }

  const onDelete = id => {
    deleteStudent(id)
  }

  const menu = (
    <ActionMenu width={'165px'}>
      <ActionMenuItem key={'edit'} onClick={() => onEditStudent(studentId)}>
        <ItemText>Edit Profile</ItemText>
      </ActionMenuItem>
      <ActionMenuItem key={'invite'}>
        <ItemText>
          {data?.status == '0' ? 'Invite Sent' : 'Resend Invite'}
        </ItemText>
      </ActionMenuItem>
      <ActionMenuItem key={'blacklist'} onClick={handleBlacklist}>
        <ItemText>Blacklist</ItemText>
      </ActionMenuItem>
      <ActionMenuItem key="active">
        {data?.status == '2' ? 'Inactivate' : 'Activate'}
      </ActionMenuItem>
      <SmallStyleDivider />
      <ActionMenuItem key="delete" onClick={() => onDelete(studentId)}>
        <ItemDeleteText>Delete Student</ItemDeleteText>
      </ActionMenuItem>
    </ActionMenu>
  )

  return (
    <>
      {needViewButton ? (
        <Main>
          <StyledDropDownButton
            overlay={menu}
            shape="round"
            onClick={() => handleMenuClick(studentId)}
            trigger={['click']}
            icon={<DownArrow />}
          >
            <ButtonText>View</ButtonText>
          </StyledDropDownButton>
        </Main>
      ) : (
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <SmallButtons height={'38px'} icon={<VerticalThreeDots />} />
          </a>
        </Dropdown>
      )}

      <ViewStudentDrawer
        viewDrawer={viewDrawer}
        setViewDrawer={setViewDrawer}
        singleStudentData={singleStudentData}
      />

      <BlacklistDrawer
        blacklistDrawer={blacklistDrawer}
        setBlacklistDrawer={setBlacklistDrawer}
      />
    </>
  )
}

export default ActionsStudent
