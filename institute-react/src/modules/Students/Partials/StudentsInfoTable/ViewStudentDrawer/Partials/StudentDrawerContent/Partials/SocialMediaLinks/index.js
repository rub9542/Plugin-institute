import React from 'react'
import BrowseDefaultIcon from 'components/icons/BrowseDefaultIcon'
import Avatar from 'components/Avatar'
import RightArrow from 'components/icons/RightArrow'

import {
  SubFLex,
  MainHeading,
  SecondGreyText,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const SocialMediaLinks = () => {
  return (
    <>
      <MainHeading>Social Media Links</MainHeading>

      <SubFLex>
        <a href={'#'}>
          <SubFLex centerVertically gap="10px">
            <div>
              <Avatar
                src={''}
                size={24}
                icon={<BrowseDefaultIcon />}
                background="none"
              />
            </div>
            <SecondGreyText marginBottom="0">behance.net/vikram</SecondGreyText>
            <RightArrow />
          </SubFLex>
        </a>
      </SubFLex>
    </>
  )
}

export default SocialMediaLinks
