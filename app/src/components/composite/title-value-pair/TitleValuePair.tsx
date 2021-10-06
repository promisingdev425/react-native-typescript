import React from 'react'
import { View } from 'react-native'

import { ValueDotContainer, Value, TheDot, SubText } from './styles'

export interface ITitleValuePair {
  /**
   * The value.
   */
  value: string

  /**
   * Appends a percentage sign.
   */
  isPercentage: boolean

  /**
   * The subtext.
   */
  subText: string

  /**
   * Should this have a dot.
   */
  hasDot?: boolean

  /**
   * Controls the color of the dot.
   */
  dotColor?: string
}

/**
 * `<TitleValuePair>`
 */
export const TitleValuePair: React.FC<ITitleValuePair> = ({
  value,
  isPercentage,
  subText,
  hasDot = false,
  dotColor = 'red',
  ...rest
}) => {
  const appendValue = isPercentage ? '%' : ''

  return (
    <View {...rest} >

      <ValueDotContainer>
        <Value accessible={true} >
          {value}
          {appendValue}
        </Value>
        {hasDot && <TheDot testID="Dot" size={20} color={dotColor} />}
      </ValueDotContainer>

      <SubText accessible={true}>{subText}</SubText>

    </View>
  )
}
