import React from 'react'
import { View } from 'react-native'
// import PropTypes from 'prop-types';

import { Text } from '~/components'
import { TabBrowseIcon } from '~/assets/images'

/**
 * `<Login>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export function Login({ ...rest }) {
  return (
    <View {...rest}>
      <Text p={5}>Login Page</Text>
      <TabBrowseIcon />
    </View>
  )
}

Login.propTypes = {}

/**
 * `<LoginConnected>` connects the Login
 * component with the rest of the app (ie. routing, services, store, etc.).
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
/* istanbul ignore next */
export function LoginConnected() {
  return <Login />
}
