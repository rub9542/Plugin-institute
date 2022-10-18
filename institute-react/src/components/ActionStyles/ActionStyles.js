import styled from 'styled-components'
import { Dropdown, Menu, Divider } from 'antd'
import { COLORS } from 'theme'
import Button from 'components/Button/index'

export const Main = styled.div`
  .ant-btn-group > .ant-btn:first-child:not(:last-child),
  .ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: ${COLORS.BLUE_T_97};
    border: 1px solid ${COLORS.BLUE_T_80};
  }
  .ant-btn-group > .ant-btn:last-child:not(:first-child),
  .ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: ${COLORS.BLUE_T_97};
    border: 1px solid ${COLORS.BLUE_T_80};
  }
`

export const StyledDropDownButton = styled(Dropdown.Button)``

export const ButtonText = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${COLORS.PRIMARY};
`
export const ActionMenu = styled(Menu)`
  padding: 5px;
  width: ${props => (props.width ? props.width : 'auto')};
`
export const ActionMenuItem = styled(Menu.Item)`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 10px;
`
export const ItemText = styled.p`
  margin-bottom: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${props => (props.color ? props.color : COLORS.GREY_T_20)};
`
export const ItemDeleteText = styled.p`
  margin-bottom: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.RED_S2_100};
`
export const SmallButtons = styled(Button.Default)`
  background: ${COLORS.WHITE};
  padding: 9px;
  > div {
    margin-left: 0;
  }
`
export const StyledDivider = styled(Divider)`
  margin: 10px 0px;
`
export const SmallStyleDivider = styled(Divider)`
  margin: 5px 0px;
`
