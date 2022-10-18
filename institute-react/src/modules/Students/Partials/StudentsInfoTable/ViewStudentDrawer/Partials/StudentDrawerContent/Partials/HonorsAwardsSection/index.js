import React from 'react'
import { COLORS } from 'theme'
import Avatar from 'components/Avatar'
import AwardsIcon from 'components/icons/AwardsIcon'
import {
  MainHeading,
  SecondaryHeading,
  StyledP,
  GreyText,
  SecondGreyText,
  SubFLex,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const HonorsAwardsSection = () => {
  return (
    <>
      <MainHeading>Honors & Awards</MainHeading>
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
            />
          </div>
          <SubFLex column>
            <SecondaryHeading>Student of Integrity Award</SecondaryHeading>
            <SecondGreyText marginBottom="15px">
              Christ University
            </SecondGreyText>

            <GreyText color={COLORS.GREY_T_60}>25 Dec 2021</GreyText>

            <StyledP webkitBox={true}>
              The rc drone is controlled by a dc motor propelled system with 2x
              rudders with user making use of an RC remote to operate the boat.
              The rc boat is integrated with an on-board oil skimmer system that
              separates oil from the water and collects it in a different tank.
              The rc boat is integrated with an on-board oil skimmer system that
              separates oil from the water and collects it in a different tank.
            </StyledP>
          </SubFLex>
        </SubFLex>
      </SubFLex>
    </>
  )
}

export default HonorsAwardsSection
