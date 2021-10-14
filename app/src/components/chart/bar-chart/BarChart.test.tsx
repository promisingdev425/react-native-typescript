import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { BarChart } from './BarChart'

describe('BarChart', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <BarChart
          accessibilityLabel="BarChart"
          title="Bar Chart"
          gridColor="lightGray"
          values={[
            { key: 0, value: 100, label: 'January' },
            { key: 0, value: 120, label: 'Februray' },
            { key: 0, value: -120, label: 'March' },
            { key: 0, value: 130, label: 'April' },
            { key: 0, value: 140, label: 'May' },
          ]}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByA11yLabel('BarChart'),
    )
  })

  it('should render titles', () => {
    const titles = screen.getAllByA11yLabel('LineChartTitle')

    expect(titles.length).toEqual(1)
    expect(screen.getByTestId('Root')).toContainElement(titles[0])
  })
})
