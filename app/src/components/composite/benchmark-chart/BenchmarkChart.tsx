import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '~/components/core'
import { styles } from './styles'

export interface IBenchmarkChart {
  minimum?: number,
  maximum?: number,
  negative: number,
  positive: number,
  value: number,
  isPercentage?: boolean,
}

export const calculateValuePercentage = (minimum, maximum, value) => {
  const range = maximum - minimum
  return (value - minimum) / range * 100
}

/**
 * `<BenchmarkChart>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const BenchmarkChart: React.FC<IBenchmarkChart> = ({
  minimum = 0,
  maximum = 100,
  negative,
  positive,
  value = 0,
  isPercentage = false,
  ...rest
}) => {

  const value_percentage = calculateValuePercentage(minimum, maximum, value)

  const valueAppendString = isPercentage ? "%" : ''

  const accouncement = "Occupancy is at " + value + valueAppendString + ". You need to get it to " + positive + valueAppendString + " to be considered in a good place."

  return (
    <View style={styles.container} {...rest}>

      <View testID="Labels" style={styles.top_text}>
        <Text style={styles.top_text_minimum}>
          {minimum}
          {valueAppendString}
        </Text>
        <Text style={styles.top_text_maximum}>
          {maximum}
          {valueAppendString}
        </Text>
      </View>

      <View>
        <View style={styles.bar_dividers}>
          <View style={[styles.bar_divider, styles.bar_dividers_negative]} />
          <View style={[styles.bar_divider, styles.bar_dividers_positive]} />
        </View>
        <View style={styles.bar}>
          <View style={[styles.bar_column, styles.bar_column_negative]} />
          <View style={[styles.bar_column, styles.bar_column_neutral]} />
          <View style={[styles.bar_column, styles.bar_column_positive]} />
        </View>
      </View>

      <View testID="Dot" style={[styles.dot, { left: value_percentage + '%' }]}>
        <View style={styles.dot_inner} />
      </View>

      <View testID="Indicator" style={[styles.indicator, { left: value_percentage + '%' }]}>
        <View style={styles.indicator_notch} />
        <Text color="white" style={styles.indicator_text}>
          {value}
          {valueAppendString}
        </Text>
      </View>

      <Text accessible={true}>
        {accouncement}
      </Text>

    </View>
  )
}
