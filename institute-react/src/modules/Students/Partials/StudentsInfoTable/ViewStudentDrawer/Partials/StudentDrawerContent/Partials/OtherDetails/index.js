import React from 'react'
import { COLORS } from 'theme'

import {
  SubFLex,
  MainHeading,
  SecondGreyText,
  OtherFlex,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const OtherDetails = () => {
  const otherData = [
    {
      id: 1,
      name: 'Preferred Location',
      value: 'Bangalore, Mumbai',
    },
    {
      id: 2,
      name: 'Gender',
      value: 'Male',
    },
    {
      id: 3,
      name: 'Registration No.',
      value: 'RAC1212320221004',
    },
    {
      id: 4,
      name: 'Date of Birth',
      value: '12-10-1999',
    },
    {
      id: 5,
      name: 'Secondary Email ID',
      value: 'vikram01@Indirainstitute.com',
    },
    {
      id: 6,
      name: 'Caste',
      value: 'General Category(GC)',
    },
    {
      id: 7,
      name: 'Religion',
      value: 'Hinduism',
    },
    {
      id: 8,
      name: 'Language',
      value: 'English, Hindi',
    },
    {
      id: 9,
      name: 'Hobbies',
      value: 'Reading Book, Travelling',
    },
    {
      id: 10,
      name: 'Temporary Address',
      value:
        '18, Palavayal Street, Ayanavaram, Chennai, Tamil Nadu, India, 600023',
    },
    {
      id: 11,
      name: 'Permanent Address',
      value: 'B12, A Brigade Mm Road, Bangalore, Karnataka, India, 560082',
    },
  ]

  return (
    <>
      <MainHeading>Other Information</MainHeading>

      <SubFLex column gap="20px">
        {otherData?.map(item => (
          <SubFLex>
            <OtherFlex spaceBetween>
              <SecondGreyText color={COLORS.GREY_T_60}>
                {item?.name}
              </SecondGreyText>
              <SecondGreyText>-</SecondGreyText>
            </OtherFlex>
            <SecondGreyText>{item?.value}</SecondGreyText>
          </SubFLex>
        ))}
      </SubFLex>
    </>
  )
}

export default OtherDetails
