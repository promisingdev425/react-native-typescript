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
import { withTestProps } from '~/utils'

import {
  IGradientButton,
  GradientButton as GradientButtonComp,
} from './GradientButton'

describe('GradientButton', function () {
  let screen: RenderAPI
  let button: ReactTestInstance
  let handlePress: jest.Mock

  beforeEach(() => {
    handlePress = jest.fn()

    const GradientButton = withTestProps<IGradientButton>(GradientButtonComp)

    const InnerScreen = () => (
      <View testID="Root">
        <GradientButton
          testID="GradientButtonActive"
          title="15"
          description="KPI SCORE"
          onPress={handlePress}
          active
        />
        <GradientButton
          testID="GradientButtonInActive"
          title="12"
          description="POINTS AWARD"
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    button = screen.getByTestId('GradientButtonActive')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('GradientButtonActive'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('GradientButtonInActive'),
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
