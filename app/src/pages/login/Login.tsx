import styled from 'styled-components/native'
import React, { useRef } from 'react'
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
  type ListSheetRefType = React.ElementRef<typeof ListSheet>
  const sheetRef = useRef<ListSheetRefType>()

  const handleChange = (data) => console.log(data)

  const handlePress = () => {
    if (!sheetRef) return

    sheetRef.current.show()
  }

  return (
    <View {...rest}>
      <Text p={5}>Login Page</Text>
      <GradientButton
        title="15"
        description="KPI SCORE"
        onPress={handlePress}
        active
      />

      <BottomSelector
        ref={sheetRef}
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
