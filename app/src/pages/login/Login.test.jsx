import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { Login } from './Login.jsx'

describe('Login', function () {
  let screen

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <Login testID="Login" />
      </View>
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Login')
    )
  })
})
