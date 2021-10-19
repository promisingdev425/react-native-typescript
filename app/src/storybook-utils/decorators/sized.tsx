import React from 'react'
import { View } from 'react-native'

export const sized = (size: number) => (story) =>
  <View style={{ width: size, height: size }}>{story()}</View>
