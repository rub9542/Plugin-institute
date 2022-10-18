import React from 'react'
import FilterCheckBoxComp from 'components/UIComponents/FilterCheckBoxComp'

const BlacklistFilter = () => {
  const options = [
    {
      label: 'Bad conduct',
      value: 'Bad conduct',
    },
    {
      label: 'Fees not paid',
      value: 'Fees not paid',
    },
    {
      label: 'Low attendance',
      value: 'Low attendance',
    },
  ]

  return <FilterCheckBoxComp options={options} />
}

export default BlacklistFilter
