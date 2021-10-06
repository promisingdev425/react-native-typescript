import React from 'react'
import { View } from 'react-native'

import { ValueDotContainer, Value, TheDot, Title } from './styles'

export interface ITitleValuePair {
  /**
   * The value can be any string or number (ie 3.6 or "21 days")
   */
  value: string

  /**
   * The title below the value.
   */
  title: string

  /**
   * Should this have a dot.
   */
  hasDot?: boolean

  /**
   * Controls the color of the <a href="/?path=/docs/components-dot--template">Dot</a>.
   */
  dotColor?: string
}

/**
 * `<TitleValuePair>` is a simple component that displays a value,
 * a dot (if included) and some title text.
 */
export const TitleValuePair: React.FC<ITitleValuePair> = ({
  value,
  title,
  hasDot = false,
  dotColor = 'positive',
  ...rest
}) => {

  return (
    <View {...rest}>

      <ValueDotContainer>
        <Value accessible={true}>{value}</Value>
        {hasDot && <TheDot testID="Dot" color={dotColor} hasOuterLayer={true} />}
      </ValueDotContainer>

      <Title accessible={true}>{title}</Title>
    </View>
  )
}
