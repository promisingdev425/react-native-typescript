import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { LineChart } from './LineChart'

describe('LineChart', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <LineChart
          accessibilityLabel="LineChart"
          title="Average Rent"
          strokeColor="brandPink"
          strokeWidth={2}
          values={[
            { value: 100, label: 'J' },
            { value: 120, label: 'F' },
            { value: 120, label: 'M' },
            { value: 130, label: 'A' },
            { value: 140, label: 'M' },
            { value: 110, label: 'J' },
            { value: 120, label: 'J' },
            { value: 130, label: 'A' },
            { value: 140, label: 'S' },
            { value: 150, label: 'O' },
            { value: 110, label: 'N' },
            { value: 100, label: 'D' },
          ]}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByA11yLabel('LineChart'),
    )
  })
})
