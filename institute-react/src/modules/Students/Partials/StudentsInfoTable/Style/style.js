import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { StyledTabs } from 'components/TabsPaneStyles'

export const NavWrapper = styled(Flex)`
  padding-bottom: 50px;
`
export const TableTop = styled(Flex)`
  margin-bottom: 18px;
  padding: 5px 20px 0px 20px;
  border-top: 1px solid ${COLORS.GREY_T_90};
`

export const StyledP = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: ${COLORS.GREY_T_20};
  ${props => props.textType && `text-transform: ${props.textType};`}
  span {
    text-transform: capitalize;
  }
`
export const StyledTab = styled(StyledTabs)`
  .ant-tabs-content {
    height: 270px !important;

    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const SubmitFlex = styled(Flex)`
  gap: 20px;
  padding: 20px;
  border-top: 1px solid ${COLORS.GREY_T_90};
`
export const MenuFlex = styled(Flex)`
  background: ${COLORS.WHITE};
  box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
`
export const OverlayFlex = styled(Flex)``
