import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

/**
 * `<PageLoader>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export function PageLoader({ ...rest }) {
  return (
    <View {...rest}>
      <Text>Loading...</Text>
    </View>
  )
}

PageLoader.propTypes = {}
