import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { themes } from '~/theme'

import { PieChart } from './PieChart'

const chartTitle = 'Lease expirations'

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
        <PieChart testID="PieChart" values={data} title={chartTitle} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render title', () => {
    const titleComp = screen.getByA11yLabel('Pie Chart Title')
    expect(screen.getByTestId('Root')).toContainElement(titleComp)

    expect(titleComp.props.children).toBe(chartTitle.toUpperCase())
  })

  it('should render total', () => {
    const totalValueComp = screen.getByA11yLabel('Pie Chart Total Value')
    expect(screen.getByTestId('Root')).toContainElement(totalValueComp)

    const sum = data.reduce((acc, value) => acc + value.value, 0)
    expect(totalValueComp.props.children).toBe(sum)
  })

  it('should include all factors', () => {
    const factors = screen.getAllByA11yLabel('Pie Chart Range Value')

    expect(factors.length).toEqual(data.length)
  })
})
