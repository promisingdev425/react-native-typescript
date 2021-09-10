import React from 'react'
import { View } from 'react-native'
import { fireEvent, render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { ToggleGroup } from './ToggleGroup'

describe('ToggleGroup', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock
  const options = [
    { id: 'w', value: 'week', label: 'W', a11yLabel: 'Press Week' },
    { id: 'm', value: 'month', label: 'M', a11yLabel: 'Press Month' },
    { id: 'q', value: 'quater', label: 'Q' },
  ]

  beforeEach(async () => {
    handlePress = jest.fn()
    const InnerScreen = () => (
      <View testID="Root">
        <ToggleGroup options={options} onChange={handlePress} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(screen.getByText('W'))
    expect(screen.getByTestId('Root')).toContainElement(screen.getByText('M'))
    expect(screen.getByTestId('Root')).toContainElement(screen.getByText('Q'))
  })

  it('should click', () => {
    const toggleButtons = options.map(({ id }) =>
      screen.getByTestId(`ToggleButton-${id}`),
    )

    // Press all toggle buttons
    toggleButtons.map((button, index) => {
      fireEvent.press(button)
      return expect(handlePress).toHaveBeenCalledWith(options[index])
    })

    expect(handlePress).toHaveBeenCalledTimes(options.length)
  })
})
