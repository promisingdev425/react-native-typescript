import React from 'react'
import { View, Text } from 'react-native'

/**
 * `<PageLoader>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
const PageLoader: React.FC = ({ ...rest }) => {
  return (
    <View {...rest}>
      <Text>Loading...</Text>
    </View>
  )
}

export { PageLoader }
