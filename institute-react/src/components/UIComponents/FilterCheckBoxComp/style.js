import styled from 'styled-components'
import Checkboxes from 'components/Form/Checkbox'
import { Checkbox } from 'antd'
import { COLORS } from 'theme'

export const StyledGroup = styled(Checkbox.Group)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`
export const StyledCheckbox = styled(Checkboxes)`
  margin-left: 0 !important;
  padding: 16px 10px !important;
`
