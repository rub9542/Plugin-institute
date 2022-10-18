import styled from 'styled-components'
import { Tabs } from 'antd'
import { COLORS } from 'theme'

export const StyledTabs = styled(Tabs)`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  .ant-tabs-nav-list {
    border-right: ${props =>
      props.border ? `1px solid ${COLORS.GREY_T_90}` : 'none'};
  }
  .ant-tabs-nav {
    width: 30% !important;
  }
  .ant-tabs-tab {
    padding: 15px 20px !important;
    margin-top: 0 !important;
    color: ${COLORS.GREY_T_60};
    background: ${COLORS.GREY_T_98} !important;
    border-radius: 0 !important;
    border-bottom: 1px solid ${COLORS.GREY_T_90} !important;
  }
  .ant-tabs-tab-active {
    background: ${COLORS.WHITE} !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${props => (props.textColor ? props.textColor : COLORS.GREY_T_30)};
  }
`
