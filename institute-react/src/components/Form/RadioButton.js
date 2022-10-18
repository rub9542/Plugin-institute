/* eslint-disable */
import React from 'react'
import { Radio as AntdRadio } from 'antd'
import { COLORS } from 'theme'
import styled from 'styled-components'

const StyledRadio = styled(AntdRadio)`
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.HEADING};
  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: none !important;
  }
  .ant-radio-inner {
    background: transparent;
  }
  .ant-radio-checked .ant-radio-inner::after {
    transform: scale(0.7);
  }

  ${props => props.boxed && 'padding: 12px 10px'};
  ${props => props.boxed && 'border: 1px solid #e6e7ea'};
  ${props => props.boxed && 'border-radius: 10px'};
`

const Radio = ({ onChange, label, boxed = false, ...rest }) => {
  return (
    <StyledRadio {...rest} onChange={onChange} boxed={boxed}>
      {label}
    </StyledRadio>
  )
}
export default Radio
