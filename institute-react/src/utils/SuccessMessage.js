import React from 'react'
import { message } from 'antd'
import SuccessIcon from 'components/icons/SuccessIcon'
import styled from 'styled-components'

const SuccessMessage = description =>
  message.success({
    content: description,
    className: 'custom-class',
    style: {
      marginTop: '50px',
      color: '#010E30',
      borderLeft: '5px solid red',
      transitionDuration: '5s',
    },
  })

export default SuccessMessage
