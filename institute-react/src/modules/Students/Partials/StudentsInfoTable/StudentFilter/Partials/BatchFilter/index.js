import React from 'react'
import FilterCheckBoxComp from 'components/UIComponents/FilterCheckBoxComp'

const BatchFilter = () => {
  const options = [
    {
      label: '2013 - 2017',
      value: '2013 - 2017',
    },
    {
      label: '2014 - 2018',
      value: '2014 - 2018',
    },
    {
      label: '2015 - 2019',
      value: '2015 - 2019',
    },
    {
      label: '2016 - 2017',
      value: '2016 - 2017',
    },
    {
      label: '2017 - 2021',
      value: '2017 - 2021',
    },
    {
      label: '2018 - 2020',
      value: '2018 - 2020',
    },
    {
      label: '2019 - 2021',
      value: '2019 - 2021',
    },
  ]
  return <FilterCheckBoxComp options={options} />
}

export default BatchFilter
