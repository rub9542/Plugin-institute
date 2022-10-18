import styled from 'styled-components'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

export const DateStyles = styled(DatePicker)`
  margin-top: 5px;
  width: ${props => (props.width ? props.width : '100%')};
  height: 50px;
  padding: 10px 20px;
  background: #fafafb;
  border: 1px solid #e6e7ea;
  border-radius: 8px;
  line-height: 24px;

  &:focus {
    outline: none;
    opacity: 1;
    box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
    background-color: #ffffff;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    opacity: 0.4;
  }
  &:hover {
    border: 1px solid #e6e7ea;
  }
  .ant-picker-input > input {
    font-size: 1.1428571428571428em;
    font-weight: 500;
  }
`
export const StyledRange = styled(RangePicker)`
  margin-top: 5px;
  width: ${props => (props.width ? props.width : '100%')};
  height: 50px;
  padding: 10px 20px;
  background: #fafafb;
  border: 1px solid #e6e7ea;
  border-radius: 8px;
  line-height: 24px;

  &:focus {
    outline: none;
    opacity: 1;
    box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
    background-color: #ffffff;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    opacity: 0.4;
  }
  &:hover {
    border: 1px solid #e6e7ea;
  }
  .ant-picker-input > input {
    font-size: 1.1428571428571428em;
    font-weight: 500;
  }
`
