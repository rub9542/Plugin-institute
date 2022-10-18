/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'theme'

const StyledAvatar = styled(Avatar)`
  margin-left: ${props => (props.margin ? '6px' : '')};
  font-weight: 600 !important;
  font-size: ${props => (props?.font ? props?.font : '12px')} !important;
  line-height: ${props =>
    props?.lineheight ? props?.lineheight : '16px'} !important;
  text-align: center !important;
  color: ${COLORS.HEADING} !important;
  background: ${props => (props?.background ? props?.background : '')};

  box-shadow: ${props =>
    props.boxshadow ? `inset 0px 0px 2px rgba(0, 0, 0, 0.25)` : 'none'};
  padding: ${props => (props.padding ? props.padding : '0')};
`

const AntdAvatar = ({
  background,
  size,
  IconName,
  src,
  font,
  lineheight,
  boxShadow = false,
  padding,
  ...rest
}) => {
  return (
    <>
      <StyledAvatar
        background={background}
        size={size}
        font={font}
        src={src}
        lineheight={lineheight}
        boxshadow={boxShadow}
        padding={padding}
        {...rest}
      >
        {IconName}
      </StyledAvatar>
    </>
  )
}

export default AntdAvatar
