import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { ToggleGroup } from './ToggleGroup'

describe('ToggleGroup', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock

  beforeEach(() => {
    handlePress = jest.fn()
    const InnerScreen = () => (
      <View testID="Root">
        <ToggleGroup
          testID="ToggleGroup"
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
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('ToggleGroup'),
    )
  })
})
