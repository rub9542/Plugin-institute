import React from 'react'
import Drawer from 'components/Drawer'
import CustomTag from 'components/CustomTag'

const SettingsDrawer = ({ settingDrawer, setsettingDrawer }) => {
  const content = () => {
    return (
      <CustomTag
        colorType="grey"
        message="API Integration"
        width="100%"
        padding={'15px'}
      />
    )
  }
  return (
    <>
      <Drawer
        width="40%"
        title={'Settings'}
        placement="right"
        closable={true}
        onClose={() => setsettingDrawer(false)}
        visible={settingDrawer}
        content={content()}
      />
    </>
  )
}

export default SettingsDrawer
