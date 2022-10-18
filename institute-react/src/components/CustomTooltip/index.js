import React from 'react'
import { Tooltip } from 'antd'

const CustomTooltip = ({ placement = 'bottomLeft', overlay, content }) => {
  return (
    <Tooltip placement={placement} title={overlay}>
      {content}
    </Tooltip>
  )
}

export default CustomTooltip
