import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { HeaderBar } from './HeaderBar.jsx'

describe('HeaderBar', function () {
  let screen

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <HeaderBar testID="HeaderBar" title="Property Leaderboard" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('HeaderBar'),
    )
  })
})
