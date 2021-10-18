import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Benchmark } from './Benchmark'

describe('Benchmark', function () {
  let screen: RenderAPI
  let testValues

  beforeEach(() => {
    testValues = {
      indicatorPosition: 0.5,
      indicatorLabel: '50%',
      colorBarNegativeLabel: '0-5 pts',
      colorBarWarningLabel: '6-9 pts',
      colorBarPositiveLabel: '10 pts',
      dividerNegativeLabel: '72%',
      dividerWarningLabel: '80%',
      dividerPositiveLabel: '92%',
      accessibilityLabel: 'This is a test label',
    }

    const InnerScreen = () => (
      <View testID="Root">
        <Benchmark {...testValues} testID="Benchmark" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Benchmark'),
    )
  })

  it('should render all labels', () => {
    expect(screen.getByTestId('Benchmark')).toContainElement(
      screen.getByText(testValues.indicatorLabel),
      screen.getByText(testValues.colorBarNegativeLabel),
      screen.getByText(testValues.colorBarWarningLabel),
      screen.getByText(testValues.colorBarPositiveLabel),
      screen.getByText(testValues.dividerNegativeLabel),
      screen.getByText(testValues.dividerWarningLabel),
      screen.getByText(testValues.dividerPositiveLabel),
    )
  })

  it('should have an accessibilityLabel', () => {
    expect(screen.getByTestId('Benchmark')).toContainElement(
      screen.getByLabelText('This is a test label'),
    )
  })

  it('it should render the indicator at the correct x position', () => {
    expect(screen.getByTestId('Indicator')).toHaveStyle({ left: '50%' })
  })
})
