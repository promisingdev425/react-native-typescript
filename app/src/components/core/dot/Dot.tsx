import React from 'react'
import { View } from 'react-native'

import { Container, DotOuter, DotInner } from './styles'

export interface IDot {
  /**
   * The size of the dot.
   */
  size: number

  /**
   * The color of the dot.
   */
  color: string
}

/**
 * `<Dot>` takes 2 properties for the size of the dot and the color.
 */
export const Dot: React.FC<IDot> = ({ size, color, ...rest }) => {
  return (
    <Container size={size} {...rest}>
      <DotOuter size={size} color={color} />
      <DotInner size={size} color={color} />
    </Container>
  )
}
