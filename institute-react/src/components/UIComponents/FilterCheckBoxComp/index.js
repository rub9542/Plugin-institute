import React from 'react'
import {
  StyledGroup,
  StyledCheckbox,
} from 'components/UIComponents/FilterCheckBoxComp/style'
import Flex from 'components/Flex'
import CustomTag from 'components/CustomTag'

const FilterCheckBoxComp = ({ options, onChange, value }) => {
  return (
    <StyledGroup onChange={onChange} value={value}>
      {options?.map(item => (
        <Flex spaceBetween centerVertically>
          <StyledCheckbox
            key={item.value}
            value={item.value}
            label={item.label}
          />
          <CustomTag colorType="grey" message="7" />
        </Flex>
      ))}
    </StyledGroup>
  )
}

export default FilterCheckBoxComp
