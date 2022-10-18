import React from 'react'

import { SingleCard, CardText, CardValue } from 'components/InfoCards/style'
import { COLORS } from 'theme'

import UserDefaultIcon from 'components/icons/UserDefaultIcon'

const InfoCards = ({
  background = COLORS.BLUE_T_95,
  padding = '15px 25px',
  width = 'auto',
  icon,
  text,
  value,
}) => {
  return (
    <SingleCard
      background={background}
      padding={padding}
      width={width}
      column
      flexStart
    >
      {icon}
      <CardText>{text}</CardText>
      <CardValue>{value}</CardValue>
    </SingleCard>
  )
}

export default InfoCards
