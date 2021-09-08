import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { HeaderBar } from './HeaderBar'

describe('HeaderBar', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <HeaderBar
          title="Property Leaderboard"
          avatar={{
            name: 'John Doe',
            image: 'https://avatars.githubusercontent.com/u/20338216?v=4',
          }}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('Property Leaderboard'),
    )
  })

  // TODO: write test case after implement <Avatar /> component.
})
