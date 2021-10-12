import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Benchmark, calculateValuePercentage } from './Benchmark'

describe('Benchmark', function () {
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
        <Benchmark
          {...testValues}
          testID="Benchmark"
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContainElement(screen.getByTestId('Benchmark'))

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
