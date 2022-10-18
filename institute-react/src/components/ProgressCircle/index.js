import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from '../../theme'

const Box = styled(Flex)`
  gap: 7px;
`

const Percentage = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${COLORS.BLACK_WHITE_B_100};
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${props => props.width};
`

const StyledSvg = styled.svg`
  transform: rotate(-90deg);
  .progress-bar__background {
    fill: none;
    stroke: #e2eff0;
    stroke-width: 7;
  }
  .progress-bar__progress {
    fill: none;
    stroke: #e2eff0;
    stroke: #78bec7;
    stroke-dasharray: 100 100;
    stroke-dashoffset: ${props => props.progress};
    stroke-linecap: butt;
    stroke-width: 7;
    transition: stroke-dashoffset 1s ease-in-out;
  }
`

const ProgressCircle = ({ progressRate = 0, width = '40px' }) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(100 - progressRate)
  }, [progressRate])

  const cx = 20,
    cy = 15,
    r = 14.9

  return (
    <Box centerVertically>
      <Div width={width}>
        <StyledSvg viewBox="-4 -4 50 40" progress={progress}>
          <circle cx={cx} cy={cy} r={r} className="progress-bar__background" />
          <circle cx={cx} cy={cy} r={r} className="progress-bar__progress " />
        </StyledSvg>
      </Div>
      <Percentage>{progressRate} %</Percentage>
    </Box>
  )
}
export default ProgressCircle
