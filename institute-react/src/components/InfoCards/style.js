import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'

export const SingleCard = styled(Flex)`
  background: ${props => props.background};
  padding: ${props => (props.padding ? props.padding : 0)};
  border-radius: 10px;
  width: ${props => props.width};
`

export const CardText = styled.p`
  margin-top: 20px;
  margin-bottom: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${COLORS.GREY_T_60};
`
export const CardValue = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${COLORS.GREY_T_20};
`
