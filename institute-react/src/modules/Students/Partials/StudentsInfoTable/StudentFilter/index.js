import React from 'react'
import {
  StyledTab,
  SubmitFlex,
  MenuFlex,
} from 'modules/Students/Partials/StudentsInfoTable/Style/style'

import BatchFilter from 'modules/Students/Partials/StudentsInfoTable/StudentFilter/Partials/BatchFilter'
import StatusFilter from 'modules/Students/Partials/StudentsInfoTable/StudentFilter/Partials/StatusFilter'
import BlacklistFilter from 'modules/Students/Partials/StudentsInfoTable/StudentFilter/Partials/BlacklistFilter'
import CompletionFilter from 'modules/Students/Partials/StudentsInfoTable/StudentFilter/Partials/CompletionFilter'
import Button from 'components/Button'
import DegreeAndDepartmentFilter from 'modules/Students/Partials/StudentsInfoTable/StudentFilter/Partials/DegreeAndDepartmentFIlter'
import FilterDiv from 'components/FilterDiv'

const { TabPane } = StyledTab

const StudentFilter = () => {
  const menu = (
    <MenuFlex column>
      <StyledTab border={true} tabPosition={'left'} type="card">
        <TabPane tab="Batch" key="1">
          <BatchFilter />
        </TabPane>
        <TabPane tab="Degree & Department" key="2">
          <DegreeAndDepartmentFilter />
        </TabPane>
        <TabPane tab="Status" key="3">
          <StatusFilter />
        </TabPane>
        <TabPane tab="Completion" key="4">
          <CompletionFilter />
        </TabPane>
        <TabPane tab="Blacklist" key="5">
          <BlacklistFilter />
        </TabPane>
      </StyledTab>
      <SubmitFlex right>
        <Button.Secondary text="Cancel" />
        <Button.Primary
          // htmlType="submit"
          // form={'student_form'}
          text="Apply Filter"
        />
      </SubmitFlex>
    </MenuFlex>
  )

  return <FilterDiv overlayMenu={menu} />
}

export default StudentFilter
