import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { BenchmarkChart, calculateValuePercentage } from './BenchmarkChart'

describe('BenchmarkChart', function () {
  let screen: RenderAPI
  let testValues;

  beforeEach(() => {
    testValues = {
      minimum: 12,
      maximum: 95,
      negative: 25,
      positive: 75,
      value: 30,
      isPercentage: true
    }

    const InnerScreen = () => (
      <View testID="Root">
        <BenchmarkChart
          {...testValues}
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
    const valuePercentage = calculateValuePercentage(
      testValues.minimum,
      testValues.maximum,
      testValues.value,
    )

    expect(screen.getByTestId('Dot'))
      .toHaveStyle({left: valuePercentage + '%'})

    expect(screen.getByTestId('Indicator'))
      .toHaveStyle({left: valuePercentage + '%'})
  })

})
