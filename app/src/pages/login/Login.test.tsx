import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Login } from './Login'

describe('Login', function () {
  let screen: RenderAPI
  let button

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <Login testID="Login" />
      </View>
    )

    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    button = screen.getByA11yLabel('ButtonForToggleSheet')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Login'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('BottomSelector'),
    )
  })

  it('should click gradient button', () => {
    fireEvent.press(button)
  })
})
