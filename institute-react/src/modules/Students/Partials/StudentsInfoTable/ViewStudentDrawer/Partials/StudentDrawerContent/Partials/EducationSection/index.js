import React from 'react'
import Flex from 'components/Flex'
import CustomTag from 'components/CustomTag'
import { COLORS } from 'theme'
import Avatar from 'components/Avatar'
import AwardsIcon from 'components/icons/AwardsIcon'

import {
  SubFLex,
  MainHeading,
  SecondaryHeading,
  GreyText,
  Marks,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const EducationSection = ({ studentData }) => {
  return (
    <>
      <MainHeading>Educations</MainHeading>

      <SubFLex column gap="25px">
        {studentData?.educations?.map(item => (
          <Flex spaceBetween>
            <SubFLex gap="12px">
              <Avatar
                src={''}
                size={48}
                background="none"
                boxShadow={true}
                icon={<AwardsIcon />}
                padding="5px"
              />
              <SubFLex column>
                <SubFLex gap="20px" flexStart>
                  <SecondaryHeading fontWeight="600">
                    {item?.name}
                  </SecondaryHeading>
                  {item?.current && (
                    <CustomTag
                      message="Currently Pursuing"
                      bordered={true}
                      background="none"
                      colorType="grey"
                      border={COLORS.GREY_T_80}
                    />
                  )}
                </SubFLex>
                <GreyText>{item?.board}</GreyText>
                <GreyText color={COLORS.GREY_T_60}>
                  <span>{item?.batch}</span> {item?.location}
                </GreyText>
              </SubFLex>
            </SubFLex>

            <Marks>
              {item?.Aggregate ? 'Aggregate' : 'Marks'} - {item?.marks}% <br />
              {item?.current && <span>(till {item?.sem} sem)</span>}
            </Marks>
          </Flex>
        ))}
      </SubFLex>
    </>
  )
}

export default EducationSection
