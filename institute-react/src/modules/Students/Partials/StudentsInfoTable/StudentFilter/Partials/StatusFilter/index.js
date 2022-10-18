import React from 'react'
import FilterCheckBoxComp from 'components/UIComponents/FilterCheckBoxComp'

const StatusFilter = () => {
  const options = [
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'Pending',
      value: 'Pending',
    },
    {
      label: 'Invite Sent',
      value: 'Invite Sent',
    },
    {
      label: 'Not Interested',
      value: 'Not Interested',
    },
  ]

  return <FilterCheckBoxComp options={options} />
}

export default StatusFilter
