import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import Checkboxes from 'components/Form/Checkbox'
import { Checkbox } from 'antd'

export const HeaderDiv = styled.div`
  margin: 20px 0;
  padding: 18px;
  background-color: ${COLORS.PRIMARY_GREY_T_98};
  border-radius: 8px;
  border: 1px solid ${COLORS.GREY_T_90};
  span {
    margin-right: 15px;
  }
`

export const StyledHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 10px;
  color: ${COLORS.GREY_T_10};
  span {
    color: ${COLORS.GREY_T_60};
  }
`
export const InfoFLex = styled(Flex)``
export const InfoText = styled.p`
  :first-child {
    width: 30%;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.GREY_T_30};
`
export const StyledGroup = styled(Checkbox.Group)`
  width: 100%;
`
export const StyledCheckbox = styled(Checkboxes)`
  width: 100%;
  border-radius: 8px;
  margin-left: 0 !important;
  padding: 16px 15px;
  margin: 5px 0;
  border: 1px solid ${COLORS.GREY_T_90};
`
export const FooterFlex = styled(Flex)`
  gap: 20px;
`
