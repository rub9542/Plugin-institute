/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import Input from 'components/Form/Input'
import SearchIcon from 'components/icons/SearchIcon'

const StyleInput = styled(Input)`
  .ant-input {
    font-weight: 400;
    font-size: 16px;
    line-height: 24;
    margin-left: 10px;
  }
`

const SearchInput = ({
  searchValue,
  setSearchValue,
  height = '38px',
  width = '240px',
  placeholder = 'Search',
  allowClear,
  suffix = <SearchIcon />,
  prefix = <SearchIcon />,
  bordered = true,
  iconPosition = 'prefix',
  ...rest
}) => {
  const onSearchChange = e => {
    setSearchValue(e.target.value)
  }
  return (
    <>
      <StyleInput
        {...rest}
        width={width}
        height={height}
        placeholder={placeholder}
        suffix={iconPosition == 'suffix' && suffix}
        prefix={iconPosition == 'prefix' && prefix}
        value={searchValue}
        onChange={onSearchChange}
        allowClear={allowClear}
        bordered={bordered}
      />
    </>
  )
}
export default SearchInput
