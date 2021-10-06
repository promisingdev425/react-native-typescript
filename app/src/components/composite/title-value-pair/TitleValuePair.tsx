import React from 'react'
import { View } from 'react-native'

import { Dot, Text } from '../../core'

import { ValueDotContainer, Value } from './styles'

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
   * The dot color.
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
    <View {...rest}>
      <ValueDotContainer>
        <Value>
          {value}
          {appendValue}
        </Value>

        {hasDot && <Dot size={18} color={dotColor} />}
      </ValueDotContainer>

      <Text>{subText}</Text>
    </View>
  )
}
