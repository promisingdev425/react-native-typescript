import React from 'react'
import { View } from 'react-native'

import { Text } from '~/components'
import { Icons } from '~/assets'

/**
 * `<Login>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const Login = ({ ...rest }) => (
  <View {...rest}>
    <Text p={5}>Login Page</Text>
    <Icons.TabBrowse />
  </View>
)

/**
 * `<LoginConnected>` connects the Login
 * component with the rest of the app (ie. routing, services, store, etc.).
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
/* istanbul ignore next */
export const LoginConnected = () => <Login />
