import styled from 'styled-components/native'
import React, { useState } from 'react'
import { View } from 'react-native'

import { Text, ListSheet, GradientButton } from '~/components'
import { ApplicationIcon } from '~/assets/images'

const BottomSelector = styled(ListSheet)``

/**
 * `<Login>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const Login = ({ ...rest }) => {
  const [isSheetOpen, toggleSheet] = useState(false)

  const handleChange = (data) => console.log('data before hide:', data)

  const handleChangeAfterHide = (data) => {
    console.log('data after hide:', data)
    toggleSheet(false)
  }

  const handlePress = () => {
    toggleSheet(!isSheetOpen)
  }

  return (
    <View {...rest}>
      <Text p={5}>Login Page</Text>
      <GradientButton
        title="15"
        description="KPI SCORE"
        onPress={handlePress}
        accessibilityLabel="ButtonForToggleSheet"
        active
      />

      <BottomSelector
        testID="BottomSelector"
        open={isSheetOpen}
        title="Leasing Reports"
        options={[
          {
            Icon: ApplicationIcon,
            value: 'application',
            label: 'Engagement Score',
          },
          {
            Icon: ApplicationIcon,
            value: 'responsiveness',
            label: 'Responsiveness',
          },
        ]}
        itemHeight={48}
        onChange={handleChange}
        onChangeAfterHide={handleChangeAfterHide}
        isHideAfterChoose
      />
    </View>
  )
}

/**
 * `<LoginConnected>` connects the Login
 * component with the rest of the app (ie. routing, services, store, etc.).
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
/* istanbul ignore next */
export const LoginConnected = () => <Login />
