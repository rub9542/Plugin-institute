import React, { useState } from 'react'
import { Checkbox } from 'antd'
import SelectArrowIcon from 'components/icons/SelectArrowIcon'
import {
  StyledCollapse,
  OptionsFlex,
  OptionText,
} from 'components/UIComponents/CollapseCheckBox/style'

const CheckboxGroup = Checkbox.Group

const { Panel } = StyledCollapse

const CollapseCheckBox = ({
  id,
  headerText = 'header',
  plainOptions,
  defaultCheckedList,
  checkedList,
  setCheckedList,
}) => {
  const [checkAll, setCheckAll] = useState(false)

  const onChange = list => {
    setCheckedList(list)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setCheckAll(e.target.checked)
  }

  console.log('checkedList', checkedList)
  return (
    <>
      <StyledCollapse id={id} ghost expandIcon={() => <SelectArrowIcon />}>
        <Panel
          destroyInactivePanel={true}
          header={
            <Checkbox onChange={onCheckAllChange} checked={checkAll}>
              <OptionText>{headerText}</OptionText>
            </Checkbox>
          }
          key="1"
        >
          <OptionsFlex column>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </OptionsFlex>
        </Panel>
      </StyledCollapse>
    </>
  )
}

export default CollapseCheckBox
