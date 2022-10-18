import React from 'react'
import { Dropdown } from 'antd'
import VerticalThreeDots from 'components/icons/VerticalThreeDots'

import {
  ActionMenu,
  ActionMenuItem,
  ItemText,
  SmallButtons,
} from 'components/ActionStyles/ActionStyles'

const StudentDetailsAction = () => {
  const menu = (
    <ActionMenu width={'165px'}>
      <ActionMenuItem key={'resume'}>
        <ItemText>Download Resume</ItemText>
      </ActionMenuItem>

      <ActionMenuItem key={'remove'}>
        <ItemText>Remove Candidate</ItemText>
      </ActionMenuItem>
    </ActionMenu>
  )

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={e => e.preventDefault()}>
          <SmallButtons height={'38px'} icon={<VerticalThreeDots />} />
        </a>
      </Dropdown>
    </>
  )
}

export default StudentDetailsAction
