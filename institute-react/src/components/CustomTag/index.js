/* eslint-disable react/prop-types */
import React from 'react'
import { Tag } from 'antd'
import styled, { css } from 'styled-components'
import { COLORS } from 'theme'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  padding-right: 5px;
`

const SuccessAlert = css`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.96),
      rgba(255, 255, 255, 0.96)
    ),
    #4fc7b3 !important;
  border-color: #b0e6dd !important;
  margin-right: 28px !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RedTag = css`
  background: ${COLORS.RED_T_96}!important;
  color: ${COLORS.RED_T_92};
`
const GreenTag = css`
  background: ${COLORS.GREEN_T_90}!important;
  color: ${COLORS.GREEN_TAG_TEXT};
`
const GrayTag = css`
  background: ${COLORS.TAG_BACKGROUND_LIGHT_PURPLE}!important;
  color: ${COLORS.TEXT_PRIMARY};
`
const YellowTag = css`
  background: ${COLORS.YELLOW_T_92}!important;
  color: ${COLORS.YELLOW_S_60};
`
const OrangeTag = css`
  background: ${COLORS.ORANGE_T_85}!important;
  color: ${COLORS.YELLOW_S_45};
`

const StyledTag = styled(Tag)`
  border: ${props => (props.bordered ? '1px solid' : '0px')};
  box-sizing: border-box;
  border-radius: 6px;
  padding: ${props => (props.padding ? props.padding : '3px 6px')};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  width: ${props => (props.width ? props.width : 'auto')};
  ${props => !props.color && `background: ${props.background}`};
  ${props => !props.color && `border-color: ${props.border}`};
  color: ${props => (props.color ? props.color : props.colortype)};
  ${props => props.colortype === 'success' && SuccessAlert}
  ${props => props.colortype === 'red' && RedTag}
  ${props => props.colortype === 'green' && GreenTag}
  ${props => props.colortype === 'grey' && GrayTag}
  ${props => props.colortype === 'yellow' && YellowTag}
  ${props => props.colortype === 'orange' && OrangeTag}
`
const CustomTag = ({
  background,
  border,
  message,
  color,
  colorType,
  textColor,
  bordered = false,
  width,
  padding,
}) => {
  return (
    <Flex>
      <StyledTag
        colortype={colorType}
        color={color}
        background={background}
        border={border}
        textcolor={textColor}
        bordered={bordered}
        width={width}
        padding={padding}
      >
        {message}
      </StyledTag>
    </Flex>
  )
}

export default CustomTag
