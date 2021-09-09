import React from 'react'
import { View } from 'react-native'
import { fireEvent, render, RenderAPI } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'
import { withTheme } from '~/theme/hocs'

import { ToggleGroup } from './ToggleGroup'

describe('ToggleGroup', function () {
  let screen: RenderAPI
  let weekButton: ReactTestInstance
  let handlePress: jest.Mock

  beforeEach(async () => {
    handlePress = jest.fn()
    const InnerScreen = () => (
      <View testID="Root">
        <ToggleGroup
          options={[
            { id: 'w', value: 'week', label: 'W', a11yLabel: 'Press Week' },
            { id: 'm', value: 'month', label: 'M', a11yLabel: 'Press Month' },
            { id: 'q', value: 'quater', label: 'Q', a11yLabel: 'Press Quater' },
          ]}
          onChange={handlePress}
        />
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
    weekButton = screen.getByTestId('ToggleButton-w')
    fireEvent.press(weekButton)
    expect(handlePress).toHaveBeenCalledTimes(1)
    expect(handlePress).toHaveBeenCalledWith({
      id: 'w',
      value: 'week',
      label: 'W',
    })
  })
})
