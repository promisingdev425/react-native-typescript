import React from 'react'
import { View } from 'react-native'

import { Container, DotOuter, DotInner } from './styles'

export interface IDot {

  /**
   * The color of the dot.
   */
  color: string

  /**
   * Adds an outer layer to the dot.
   */
  hasOuterLayer?: boolean

}

/**
 * `<Dot>`
 */
export const Dot: React.FC<IDot> = ({
  color,
  hasOuterLayer=false,
  ...rest
}) => {
  return (
    <Container {...rest} accessible={true}>
      {hasOuterLayer && <DotOuter color={color} />}
      <DotInner color={color} />
    </Container>
  )
}
