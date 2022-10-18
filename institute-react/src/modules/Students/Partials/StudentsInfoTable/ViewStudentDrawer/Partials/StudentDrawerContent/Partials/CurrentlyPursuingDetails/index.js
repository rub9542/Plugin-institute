import React from 'react'
import {
  SubFLex,
  MainHeading,
  SecondaryHeading,
  SecondGreyText,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'
import { COLORS } from 'theme'

const CurrentlyPursuingDetails = () => {
  return (
    <>
      <MainHeading>Currently Pursuing</MainHeading>

      <SubFLex column gap="10px">
        <SecondaryHeading fontWeight="600">
          College - Christ University
        </SecondaryHeading>

        <SecondGreyText>
          MBA Degree in Entrepreneurship and Innovation
        </SecondGreyText>

        <SubFLex gap="50px">
          <SecondGreyText color={COLORS.GREY_T_60}>Semester 1</SecondGreyText>
          <SecondGreyText>-</SecondGreyText>
          <SecondGreyText>78%</SecondGreyText>
        </SubFLex>
        <SubFLex gap="50px">
          <SecondGreyText color={COLORS.GREY_T_60}>Semester 2</SecondGreyText>
          <SecondGreyText>-</SecondGreyText>
          <SecondGreyText>88%</SecondGreyText>
        </SubFLex>
      </SubFLex>
    </>
  )
}

export default CurrentlyPursuingDetails
