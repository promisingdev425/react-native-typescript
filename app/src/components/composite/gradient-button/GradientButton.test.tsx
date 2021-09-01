import React from 'react'
import { View } from 'react-native'
import {
  render,
  fireEvent,
  waitFor,
  RenderAPI,
} from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'
import { withTheme } from '~/theme/hocs'

import { GradientButton } from './GradientButton'

describe('GradientButton', function () {
  let screen: RenderAPI
  let button: ReactTestInstance
  let handlePress: jest.Mock

  beforeEach(() => {
    handlePress = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <GradientButton
          title="15"
          description="KPI SCORE"
          onPress={handlePress}
          active
        />
        <GradientButton title="12" description="POINTS AWARD" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    button = screen.getByTestId('ButtonInner1')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('KPI SCORE'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('POINTS AWARD'),
    )
  })

  it('should click', () => {
    fireEvent.press(button)
    expect(handlePress).toHaveBeenCalledTimes(1)
  })

  it('should trigger PressIn and PressOut events', async () => {
    // TODO: check innerbase working fine.
    fireEvent(button, 'pressIn')
    await waitFor(() => fireEvent(button, 'pressOut'))
  })
})
