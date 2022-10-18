import React from 'react'
import Drawer from 'components/Drawer'
import {
  HeaderDiv,
  StyledHeading,
  InfoFLex,
  InfoText,
  StyledCheckbox,
  StyledGroup,
  FooterFlex,
} from 'modules/Students/Partials/StudentsInfoTable/BlacklistDrawer/Styles/style'
import Button from 'components/Button'

const BlacklistDrawer = ({ blacklistDrawer, setBlacklistDrawer }) => {
  const studentInfo = [
    {
      key: 1,
      heading: 'Name',
      value: 'Shubham Kumar',
    },
    {
      key: 2,
      heading: 'Roll Number',
      value: 'S123456781',
    },
    {
      key: 3,
      heading: 'Batch ',
      value: '2017 - 2021',
    },
    {
      key: 4,
      heading: 'Deg & Department ',
      value: 'B.E - Computer Science',
    },
  ]

  const onChange = checkedValues => {
    console.log('checked = ', checkedValues)
  }
  const content = () => {
    const options = [
      {
        label: 'Fees not paid',
        value: 'Fees not paid',
      },
      {
        label: 'Bad conduct',
        value: 'Bad conduct',
      },
      {
        label: 'Low attendance',
        value: 'Low attendance',
      },
    ]
    return (
      <>
        <HeaderDiv>
          <StyledHeading>Student Info</StyledHeading>
          {studentInfo?.map(item => (
            <InfoFLex key={item?.key}>
              <InfoText>{item?.heading}</InfoText>
              <InfoText>
                <span>-</span> {item?.value}
              </InfoText>
            </InfoFLex>
          ))}
        </HeaderDiv>
        <StyledHeading>
          Reason to Blacklist <span>*</span>
        </StyledHeading>

        <StyledGroup onChange={onChange}>
          {options?.map(item => (
            <StyledCheckbox
              key={item.value}
              value={item.value}
              label={item.label}
            />
          ))}
        </StyledGroup>
      </>
    )
  }
  const footer = () => {
    return (
      <FooterFlex right>
        <Button.Secondary
          text="Close"
          onClick={() => setBlacklistDrawer(false)}
        />
        <Button.Primary
          // htmlType="submit"
          // form={'student_form'}
          text="Confirm"
        />
      </FooterFlex>
    )
  }
  return (
    <>
      <Drawer
        width="40%"
        title={'Blacklist Student'}
        placement="right"
        closable={true}
        onClose={() => setBlacklistDrawer(false)}
        visible={blacklistDrawer}
        content={content()}
        footer={footer()}
      />
    </>
  )
}

export default BlacklistDrawer
