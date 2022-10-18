import React from 'react'
import Avatar from 'components/Avatar'
import ApartmentIcon from 'components/icons/ApartmentIcon'
import CustomTag from 'components/CustomTag'
import { COLORS } from 'theme'

import {
  SubFLex,
  SecondaryHeading,
  SecondGreyText,
  GreyText,
  StyledP,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const InfoSection = ({ name, company, work, skills, duration }) => {
  return (
    <>
      <SubFLex column gap="25px">
        <SubFLex gap="12px">
          <div>
            <Avatar
              background="none"
              src={''}
              size={48}
              icon={<ApartmentIcon />}
              boxShadow={true}
              padding="5px"
            />
          </div>
          <SubFLex column>
            <SecondaryHeading>{name}</SecondaryHeading>
            <SecondGreyText>{company}</SecondGreyText>
            <StyledP webkitBox={true}>{work} </StyledP>

            <SubFLex centerVertically gap="5px" marginBottom="15px">
              <SecondGreyText marginBottom="0">Skills - </SecondGreyText>
              {skills?.map(item => (
                <CustomTag
                  message={item}
                  bordered={true}
                  border={COLORS.GREY_T_80}
                />
              ))}
            </SubFLex>

            <GreyText color={COLORS.GREY_T_60}>{duration}</GreyText>
          </SubFLex>
        </SubFLex>
      </SubFLex>
    </>
  )
}

export default InfoSection
