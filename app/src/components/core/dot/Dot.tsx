import React from 'react'
import { View } from 'react-native'

import { Container, DotOuter, DotInner } from './styles'

export interface IDot {
  /**
   * The color of the dot. Allowed values are "positive" or "negative".
   */
  color: string

  /**
   * Adds an outer layer to the dot.
   */
  hasOuterLayer?: boolean

  /**
   * Customize the accessibility label.
   * This is automatically set if the color is "positive" or "negative"
   * but can be overridden.
   */
  accessibilityLabel?: string
}

/**
 * `<Dot>` is a simple visual component that has props for
 * changing the color and if it has an outer layer.
 */
export const Dot: React.FC<IDot> = ({
  color,
  hasOuterLayer = false,
  accessibilityLabel = false,
  ...rest
}) => {
  /**
   * Let's set the accessibility label based on
   * the color or a provided label
   */
  let a11yLabel
  if (!accessibilityLabel) {
    switch (color) {
      case 'positive':
        a11yLabel = 'Metric is passing'
        break
      case 'negative':
        a11yLabel = 'Metric is failing'
        break
    }
  } else {
    a11yLabel = accessibilityLabel
  }

  return (
    <Container
      {...rest}
      accessible={true}
      accessibilityRole="image"
      accessibilityLabel={a11yLabel}
    >
      {hasOuterLayer && <DotOuter testID="DotOuterLayer" color={color} />}
      <DotInner color={color} />
    </Container>
  )
}
