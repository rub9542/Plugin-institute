import React from 'react'
import Input from 'components/Form/Input'
import Select from 'components/Select'

import {
  SectionHeading,
  StyledInputDiv,
  StyledInput,
} from 'modules/Students/Partials/AddNewStudentDrawer/Style/style'
import Label from 'components/Form/Label'

const ContactDetails = ({ countryCode, setCountryCode }) => {
  const onCountryCodeChange = value => {
    setCountryCode(value)
  }
  const CountryCode = [
    {
      id: '1',
      value: '+91',
    },
    {
      id: '2',
      value: '+93',
    },
    {
      id: '3',
      value: '+92',
    },
  ]
  return (
    <>
      <SectionHeading>Contact Details</SectionHeading>

      <Input
        width="100%"
        label="Email ID"
        placeholder="Eg. example@gmail.com"
        optional={'*'}
        name={'email'}
        rules={[
          { required: true, message: 'Please enter your email address' },
          {
            pattern: new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
            message: 'Please Enter Valid Email!',
          },
        ]}
      />

      <Label required={true}>
        Phone Number <span>*</span>
      </Label>

      <StyledInputDiv>
        <Select
          width={'18%'}
          OptionData={CountryCode}
          nameParam="value"
          bordered={false}
          onChange={onCountryCodeChange}
          value={countryCode}
        />
        <StyledInput
          width="100%"
          type="tel"
          name={'contactNumber'}
          placeholder="Eg: 1010101010"
          rules={[
            {
              required: true,
              message: 'Please Enter Mobile Number!',
            },
            {
              pattern: new RegExp(/^[0-9]{10}$/),
              message: 'Please Enter Valid Mobile Number!',
            },
          ]}
        />
      </StyledInputDiv>
    </>
  )
}

export default ContactDetails
