import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { withTestProps } from '~/utils'

import { IHeaderBar, HeaderBar as HeaderBarComp } from './HeaderBar'

describe('HeaderBar', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const HeaderBar = withTestProps<IHeaderBar>(HeaderBarComp)
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

  // TODO: write test case after implement <Avatar /> component.
})
