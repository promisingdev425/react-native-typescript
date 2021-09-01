import React from 'react'
import { View } from 'react-native'
import style from './Centered.styles'

interface ICentered {
  children: React.ReactNode
}

const Centered: React.FC<ICentered> = ({ children }) => {
  return <View style={style.main}>{children}</View>
}

export { Centered }
