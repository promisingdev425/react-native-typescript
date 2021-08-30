import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { withTestProps } from '~/utils'

import { Login as LoginScreen } from './Login'

describe('Login', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const Login = withTestProps(LoginScreen)

    const InnerScreen = () => (
      <View testID="Root">
        <Login testID="Login" />
      </View>
    )

    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Login'),
    )
  })
})
