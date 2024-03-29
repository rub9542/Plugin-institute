import React from 'react'
import styled from 'styled-components'
import { Select as AntdSelect } from 'antd'
import Label from 'components/Form/Label'
import Flex from 'components/Flex'
import SelectArrowIcon from 'components/icons/SelectArrowIcon'

const { Option } = AntdSelect

const StyledSelect = styled(AntdSelect)`
  width: 100% !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #676e83;

  .ant-select-selector {
    border-radius: 8px !important;
    border-color: #e9e9e9 !important;
    box-shadow: none !important;
  }
  .ant-select-selection-item {
    background-color: transparent;
  }
  :hover {
    background-color: transparent;
  }
  .ant-select-dropdown-placement-bottomLeft {
    width: 1000px !important;
  }
`
const LabelWrapper = styled.div`
  padding-bottom: 8px;
`

const Select = ({
  OptionData,
  placeholder,
  labelStyle,
  onChange,
  label,
  value,
  position = 'relative',
  width = '100%',
  defaultValue,
  loading,
  bordered = true,
  valueParam = 'id',
  nameParam = 'name',
  showSearch = false,
  ...rest
}) => {
  return (
    <Flex
      column
      style={{
        width: width,
        position: position,
      }}
      id="select"
    >
      {label && (
        <LabelWrapper>
          <Label labelStyle={labelStyle}>{label}</Label>
        </LabelWrapper>
      )}

      <StyledSelect
        showSearch={showSearch}
        suffixIcon={<SelectArrowIcon />}
        placeholder={placeholder}
        onChange={onChange}
        size={'large'}
        value={value || undefined}
        loading={loading}
        bordered={bordered}
        defaultValue={defaultValue}
        {...rest}
      >
        {OptionData?.map(option => {
          return (
            <Option
              style={{
                padding: '10px 12px',
              }}
              key={option[valueParam]}
              value={option[valueParam]}
              id={option?.id}
              name={option[nameParam]}
              option={option}
            >
              {option[nameParam]}
            </Option>
          )
        })}
      </StyledSelect>
    </Flex>
  )
}

export default Select
