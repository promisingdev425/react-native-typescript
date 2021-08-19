import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Login } from './Login.jsx'

describe('Login', function () {
  let screen

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <Login testID="Login" />
      </View>
    )

    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />);
  });

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Login')
    )
  })
})
