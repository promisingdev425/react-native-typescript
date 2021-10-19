import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { themes } from '~/theme'

import { PieChart } from './PieChart'

const data = [
  {
    value: 8,
    label: 'Renewed',
    color: themes.light.colors.brandPink,
  },
  {
    value: 2,
    label: 'MTM',
    color: themes.light.colors.brandOrange,
  },
  {
    value: 1,
    label: 'Skipped',
    color: themes.light.colors.orangeOverlay,
  },
  {
    value: 8,
    label: 'Notice to vocate',
    color: themes.light.colors.textPrimary,
  },
  {
    value: 22,
    label: 'Pending',
    color: themes.light.colors.lightGray,
  },
]

describe('PieChart', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <PieChart testID="PieChart" values={data} title="Lease expirations" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByA11yLabel('PieChartTitle'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByA11yLabel('PieChartTotalValue'),
    )
  })

  it('should include all factors', () => {
    const factors = screen.getAllByA11yLabel('PieChartFactor')

    expect(factors.length).toEqual(data.length)
  })
})
