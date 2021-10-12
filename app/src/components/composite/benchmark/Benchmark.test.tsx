import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Benchmark } from './Benchmark'

describe('Benchmark', function () {
  let screen: RenderAPI
  let testValues;

  beforeEach(() => {

    testValues = {
      indicatorPosition: .5,
      indicatorLabel: '50%',
      colorBarNegativeLabel: '0-5 pts',
      colorBarWarningLabel: '6-9 pts',
      colorBarPositiveLabel: '10 pts',
      dividerNegativeLabel: '72%',
      dividerWarningLabel: '80%',
      dividerPositiveLabel: '92%'
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
  })


})
