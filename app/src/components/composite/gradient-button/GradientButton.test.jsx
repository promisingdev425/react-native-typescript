import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'

import { GradientButton } from './GradientButton.jsx'

describe('GradientButton', function () {
  let screen
  let button
  let handlePress

  beforeEach(() => {
    handlePress = jest.fn()

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
    expect(handlePress).toHaveBeenCalled()
  })

  it('should trigger PressIn and PressOut events', async () => {
    fireEvent(button, 'pressIn')
    await waitFor(() => fireEvent(button, 'pressOut'))
  })
})
