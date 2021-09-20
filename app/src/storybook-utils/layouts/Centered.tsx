import React from 'react'
import { View, StyleSheet } from 'react-native'

interface ICentered {
  children: React.ReactNode
}

const Centered: React.FC<ICentered> = ({ children }) => {
  return <View style={styles.main}>{children}</View>
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export { Centered }
