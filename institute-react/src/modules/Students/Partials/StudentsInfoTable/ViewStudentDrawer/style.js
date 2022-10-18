import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import Drawer from 'components/Drawer'

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const DrawerHeader = styled(Flex)`
  gap: 20px;
  width: 98%;
`
export const HeaderFlexOne = styled(Flex)`
  gap: 10px;
  width: 75%;
`
export const InfoSection = styled(Flex)`
  gap: 5px;
  margin-left: 10px;
`
export const StudentName = styled.h2`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${COLORS.GREY_T_30};
`
export const CollegeName = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: ${COLORS.GREY_T_50};
  display: flex;
  gap: 10px;
  align-items: center;
`
export const NavHeading = styled.h2`
  margin-bottom: 18px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: inherit;
  margin-bottom: 0;
`
export const StudentInfoFlex = styled(Flex)``
