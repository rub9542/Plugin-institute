import React, { useState } from 'react'
import CustomTag from 'components/CustomTag'

const StudentStatus = ({ status }) => {
  var colorType
  var tagMessage
  if (status == '-2') {
    colorType = 'red'
    tagMessage = 'Inactive'
  } else if (status == '0') {
    colorType = 'grey'
    tagMessage = 'Invite Sent'
  } else if (status == '1') {
    colorType = 'orange'
    tagMessage = 'Pending'
  } else if (status == '2') {
    colorType = 'green'
    tagMessage = 'Active'
  }
  return (
    <CustomTag colorType={colorType} message={tagMessage} bordered={false} />
  )
}

export default StudentStatus
