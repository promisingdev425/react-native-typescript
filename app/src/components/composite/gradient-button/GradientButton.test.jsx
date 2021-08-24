import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { GradientButton } from './GradientButton.jsx'

describe('GradientButton', function () {
  let screen

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <GradientButton testID="GradientButton" />
      </View>,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('GradientButton'),
    )
  })
})
