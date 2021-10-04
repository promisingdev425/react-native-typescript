import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { BenchmarkChart, calculateValuePercentage } from './BenchmarkChart'

const test_values = {
  minimum: 12,
  maximum: 95,
  negative: 25,
  positive: 75,
  value: 30,
  isPercentage: true
}

describe('BenchmarkChart', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <BenchmarkChart
          {...test_values}
          testID="BenchmarkChart"
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContainElement(screen.getByTestId('BenchmarkChart'))

    expect(screen.getByTestId('Labels'))
      .toContainElement(screen.getByText('12%'))

    expect(screen.getByTestId('Labels'))
      .toContainElement(screen.getByText('95%'))
  })

  it('should position the dot and indicator', () => {

    const value_percentage = calculateValuePercentage(
      test_values.minimum,
      test_values.maximum,
      test_values.value,
    )

    expect(screen.getByTestId('Dot'))
      .toHaveStyle({left: value_percentage+'%'})

    expect(screen.getByTestId('Indicator'))
      .toHaveStyle({left: value_percentage+'%'})
  })

})
