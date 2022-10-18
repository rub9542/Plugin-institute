import React from 'react'

import { COLORS } from 'theme'
import Avatar from 'components/Avatar'
import AwardsIcon from 'components/icons/AwardsIcon'
import CustomTag from 'components/CustomTag'

import {
  MainHeading,
  SecondaryHeading,
  StyledP,
  GreyText,
  SecondGreyText,
  SubFLex,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const WorkExperienceSection = () => {
  return (
    <>
      <MainHeading>Work Experience</MainHeading>

      <SubFLex column gap="25px">
        <SubFLex gap="12px">
          <div>
            <Avatar
              background="none"
              src={''}
              size={48}
              icon={<AwardsIcon />}
              boxShadow={true}
              padding="5px"
              shape="square"
            />
          </div>
          <SubFLex column gap="10px">
            <SubFLex gap="20px" flexStart>
              <SecondaryHeading fontWeight="600">
                Product Designer
              </SecondaryHeading>
              <CustomTag
                message="Full Time"
                bordered={true}
                colorType="grey"
                border={COLORS.GREY_T_80}
              />
            </SubFLex>

            <SecondGreyText>Microsoft</SecondGreyText>

            <StyledP webkitBox={true}>
              Product Designers are responsible for coming up with new product
              designs that meet the needs and wants of consumers. They will have
              many duties, such as creating design concepts, drawing ideas to
              determine which one is best suited for the product, and
              communicating their plans effectively so engineers can execute
              them.
            </StyledP>

            <GreyText color={COLORS.GREY_T_60}>
              7 Months, Jan 2022-Present
            </GreyText>
          </SubFLex>
        </SubFLex>
      </SubFLex>
    </>
  )
}

export default WorkExperienceSection
