import styled from 'styled-components'
import { COLORS } from 'theme'
import { Divider } from 'antd'
import Flex from 'components/Flex'

export const Main = styled.div`
  margin: 15px 0;
`
export const MainHeading = styled.h1`
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '30px')};
  font-style: normal;
  font-weight: 700;
  font-size: 1.125em;
  line-height: 1.5em;
  color: ${COLORS.GREY_T_10};
`
export const SecondaryHeading = styled.h2`
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '10px')};
  font-style: normal;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  font-size: 1em;
  line-height: 1.5em;
  color: ${COLORS.GREY_T_10};
`
export const StyledP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.25em;
  color: ${COLORS.GREY_T_40};
  ${props => props.webkitBox && `display: -webkit-box`};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const StyledDivider = styled(Divider)`
  margin: ${props => (props.margin ? props.margin : '24px 0')};
`
export const SubFLex = styled(Flex)`
  ${props => props.gap && `gap: ${props.gap};`}
  ${props => props.marginBottom && ` margin-bottom: ${props.marginBottom};`};
`
export const GreyText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 0.938em;
  color: ${props => (props.color ? props.color : COLORS.GREY_T_40)};
  span {
    margin-right: 10px;
  }
`
export const Marks = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 21px;
  text-align: right;
  color: ${COLORS.GREY_T_10};
  span {
    color: ${COLORS.GREY_T_60};
  }
`
export const SecondGreyText = styled.p`
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '8px')};
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 1.125em;
  color: ${props => (props.color ? props.color : COLORS.GREY_T_40)};
`
export const OtherFlex = styled(Flex)`
  width: 25%;
  margin-right: 30px;
`
