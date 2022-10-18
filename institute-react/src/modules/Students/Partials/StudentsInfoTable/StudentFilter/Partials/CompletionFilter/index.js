import React, { useState } from 'react'
import PercentageRangeSlider from 'components/PercentageRangeSlider'
import styled from 'styled-components'
import { COLORS } from 'theme'

export const StyledHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin: 15px;
  color: ${props => (props.color ? props.color : COLORS.BLACK)};
`

const CompletionFilter = () => {
  const [minValue, setMinValue] = useState(20)
  const [maxValue, setMaxValue] = useState(80)

  return (
    <>
      <StyledHeading>Completion</StyledHeading>
      <StyledHeading color={COLORS.BLACK_WHITE_B_50}>
        {minValue}% - {maxValue}%
      </StyledHeading>

      <PercentageRangeSlider
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
    </>
  )
}

export default CompletionFilter
