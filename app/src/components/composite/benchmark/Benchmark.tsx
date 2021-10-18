import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import { Text } from '~/components/core'

import {
  Container,
  Indicator,
  IndicatorNotch,
  IndicatorText,
  ColorBar,
  ColorBarFail,
  ColorBarNegative,
  ColorBarWarning,
  ColorBarPositive,
  ColorBarLabel,
  Dividers,
  DividerContainer,
  DividerShape,
  DividerLabels,
  DividerLabel
} from './styles'


export interface IBenchmark {

  /**
   * This sets the position of the indicator, 0 being the far left, 1 being far right.
   */
  indicatorPosition: number,

  /**
   * This is the text value in the indicator.
   */
  indicatorLabel: string,

  /**
   * This is the label within the orange bar.
   */
  colorBarNegativeLabel: string,

  /**
   * This is the label within the yellow bar.
   */
  colorBarWarningLabel: string,

  /**
   * This is the label within the green bar.
   */
  colorBarPositiveLabel: string,

  /**
   * This is the label underneath the negative divider.
   */
  dividerNegativeLabel: string,

  /**
   * This is the label underneath the warning divider.
   */
  dividerWarningLabel: string,

  /**
   * This is the label underneath the positive divider.
   */
  dividerPositiveLabel: string,
}

/**
 * `<BenchmarkChart>` is a visual component that displays a metric
 * to a user and what their status related to the metric is.
 */
export const Benchmark: React.FC<IBenchmark> = ({
  indicatorPosition,
  indicatorLabel,
  colorBarNegativeLabel,
  colorBarWarningLabel,
  colorBarPositiveLabel,
  dividerNegativeLabel,
  dividerWarningLabel,
  dividerPositiveLabel,
  ...rest
}) => {
  return (
    <Container accessibilityRole="image" {...rest}>

      <Indicator testID="Indicator" indicatorPosition={indicatorPosition}>
        <IndicatorNotch />
        <IndicatorText>{indicatorLabel}</IndicatorText>
      </Indicator>

      <ColorBar>
        <ColorBarFail />
        <ColorBarNegative>
          <ColorBarLabel>{colorBarNegativeLabel}</ColorBarLabel>
        </ColorBarNegative>
        <ColorBarWarning>
          <ColorBarLabel>{colorBarWarningLabel}</ColorBarLabel>
        </ColorBarWarning>
        <ColorBarPositive>
          <ColorBarLabel>{colorBarPositiveLabel}</ColorBarLabel>
        </ColorBarPositive>
      </ColorBar>

      <Dividers>
        <DividerContainer>
          <DividerShape />
        </DividerContainer>
        <DividerContainer>
          <DividerShape />
        </DividerContainer>
        <DividerContainer>
          <DividerShape />
        </DividerContainer>
      </Dividers>

      <DividerLabels>
        <DividerLabel>{dividerNegativeLabel}</DividerLabel>
        <DividerLabel>{dividerWarningLabel}</DividerLabel>
        <DividerLabel>{dividerPositiveLabel}</DividerLabel>
      </DividerLabels>

    </Container>
  )
}

Benchmark.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
}
