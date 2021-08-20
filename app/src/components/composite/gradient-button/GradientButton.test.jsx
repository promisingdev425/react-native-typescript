import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'

import { GradientButton } from './GradientButton.jsx'

describe('GradientButton', function () {
  let screen

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <GradientButton
          testID="GradientButtonActive"
          title="15"
          description="KPI SCORE"
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
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('GradientButtonActive'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('GradientButtonInActive'),
    )
  })

  it('should click', async () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('GradientButtonInActive'),
    )

    const button = screen.getByTestId('GradientButtonActive')

    // Test for button press events
    fireEvent(button, 'pressIn')
    await waitFor(() => fireEvent(button, 'pressOut'))
    fireEvent(button, 'press')
  })
})
