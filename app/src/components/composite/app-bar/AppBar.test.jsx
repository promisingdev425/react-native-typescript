import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { PropertyIcon } from '~/assets/images'

import { AppBar } from './AppBar.jsx'

describe('AppBar', function () {
  let screen

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <AppBar
          testID="AppBar"
          leftItem={<PropertyIcon />}
          rightItem={<PropertyIcon />}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('AppBar'),
    )
  })
})
