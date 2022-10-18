import React from 'react'
import FilterIcon from 'components/icons/FilterIcon'
import styled from 'styled-components'
import { COLORS } from 'theme'
import Flex from 'components/Flex'
import { Dropdown } from 'antd'

export const FilterFlex = styled(Flex)`
  width: 50%;
`
export const FilterText = styled.p`
  margin-bottom: 0;
  margin-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.GREY_T_60};
`
export const StyledDropdown = styled(Dropdown)`
  width: 62%;
  cursor: pointer;
  height: 50px;
  padding-left: 10px;
  border-left: 1px solid ${COLORS.GREY_T_90};
  border-right: 1px solid ${COLORS.GREY_T_90};
`

const FilterDiv = ({ overlayMenu, label = 'Filter', trigger = 'click' }) => {
  return (
    <StyledDropdown overlay={overlayMenu} trigger={[trigger]}>
      <FilterFlex centerVertically onClick={e => e.preventDefault()}>
        <FilterIcon />
        <FilterText>{label}</FilterText>
      </FilterFlex>
    </StyledDropdown>
  )
}

export default FilterDiv
