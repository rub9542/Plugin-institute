import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { Collapse } from 'antd'

export const StyledCollapse = styled(Collapse)`
  margin-top: 10px;
`
export const OptionsFlex = styled(Flex)`
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
  }
  .ant-checkbox-group-item {
    padding: 8px 0px 5px 25px;
    :first-child {
      padding-top: 0;
    }
    span:nth-child(2) {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: ${COLORS.GREY_T_20};
    }
  }
`
export const OptionText = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.GREY_T_20};
`
