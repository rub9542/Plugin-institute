import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import Button from 'components/Button/index'

export const SectionWrapper = styled(Flex)`
  width: 100%;
  border: 1px solid ${COLORS.PAGE_BORDER};
  box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
  border-radius: 10px;
  overflow: scroll;
  background: ${COLORS.WHITE};
  &::-webkit-scrollbar {
    display: none;
  }
`

export const TopHeader = styled(Flex)`
  padding: 20px 25px;
  position: relative;
  width: 100%;
  font-size: 2em;
`
export const TopHeading = styled(Flex)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${COLORS.GREY_P_100};
`

export const TopRightFlex = styled(Flex)`
  gap: 15px;
`
export const SmallButtons = styled(Button.Default)`
  background: ${COLORS.WHITE};
  padding: 9px;
  > div {
    margin-left: 0;
  }
`
export const CardRow = styled(Flex)`
  padding: 0 25px 25px 25px;
  gap: 5px;
`
