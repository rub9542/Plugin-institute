import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'theme'
import { Slider, Form } from 'antd'

const StyledSlider = styled(Slider)`
  width: 95% !important;
  padding: 0px !important;
  height: 2px !important;
  margin: 26px 10px !important;

  .ant-slider-handle {
    width: 20px;
    height: 20px;
    margin-top: -9px;
    /* Black & White / W 100 */

    background: #ffffff;
    /* Primary / Gray / T - 95 */

    border: 1px solid #f2f3f5;
    box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
  }
  .ant-slider-track {
    background-color: ${COLORS.PRIMARY} !important;
  }

  .ant-slider-rail,
  .ant-slider-track {
    height: 4px !important;
  }

  .ant-slider-dot {
    border: none !important;
  }

  .ant-slider-mark-text {
    transform: none !important ;
  }
`

const StyledStrong = styled.strong`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${COLORS.GREY_T_60};
`

const StyledFormItem = styled(Form.Item)`
  width: 100%;
`

const PercentageRangeSlider = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  ...rest
}) => {
  const marks = {
    0: {
      style: {
        marginTop: '-6px',
      },
      label: <StyledStrong>{`0%`}</StyledStrong>,
    },
    100: {
      style: {
        left: '95%',
        marginTop: '-6px',
      },
      label: <StyledStrong>{`100%`}</StyledStrong>,
    },
  }

  const onChange = value => {
    setMinValue(value[0])
    setMaxValue(value[1])
  }

  const minChange = value => {
    setMinValue(value.target.value)
  }

  const maxChange = value => {
    setMaxValue(value.target.value)
  }

  return (
    <>
      <StyledFormItem>
        <StyledSlider
          range
          step={1}
          defaultValue={[minValue, maxValue]}
          onChange={onChange}
          marks={marks}
          min={0}
          max={100}
          value={[minValue, maxValue]}
        />
      </StyledFormItem>
    </>
  )
}

export default PercentageRangeSlider
