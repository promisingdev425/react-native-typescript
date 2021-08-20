import React from 'react'
import { View } from 'react-native'
import { render, screen } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Splash } from './Splash.jsx'

describe('Splash', function () {
  let screen

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <Splash testID="Splash" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Splash'),
    )
  })
})
