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
            { id: 'w', value: 'week', label: 'W' },
            { id: 'm', value: 'month', label: 'M' },
            { id: 'q', value: 'quater', label: 'Q' },
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
  })

  it('should click', () => {
    weekButton = screen.getByTestId('ToggleButton-w')
    fireEvent.press(weekButton)
  })
})
