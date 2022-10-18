import styled from 'styled-components'
import { Form as AntdForm } from 'antd'
import Flex from 'components/Flex'
import { DateStyles } from 'components/DatePickerStyles/DatePickerStyles'
import { Radio } from 'antd'
import RadioButton from 'components/Form/RadioButton'
import { COLORS } from 'theme'
import Drawer from 'components/Drawer'
import Input from 'components/Form/Input'

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const FormItem = styled(AntdForm.Item)`
  margin-bottom: 0px !important;
`
export const Form = styled(AntdForm)`
  row-gap: 20px;
  display: flex;
  flex-direction: column;
`
export const TwoFields = styled(Flex)`
  gap: 20px;
`
export const Date = styled(DateStyles)`
  margin-top: 5px;
`
export const RadioGroup = styled(Radio.Group)`
  display: flex;
`
export const StyledRadio = styled(RadioButton)`
  margin-top: 10px;
`
export const SectionHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin: 10px 0;
  color: ${COLORS.GREY_T_20};
`
export const StyledInputDiv = styled(Flex)`
  margin-bottom: 20px !important;
  align-items: flex-end;
  position: sticky;
  align-items: baseline;
  width: 100%;
  border-radius: 8px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-right: 0;
  }
`
export const FooterFlex = styled(Flex)`
  gap: 20px;
`
export const StyledInput = styled(Input)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`
export const MarksFlex = styled(Flex)`
  gap: 20px;
  width: 40%;
`
