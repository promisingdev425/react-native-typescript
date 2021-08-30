import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'
import { PropertyIcon } from '~/assets/images'
import { withTestProps } from '~/utils'

import { IAppBar, AppBar as AppBarComp } from './AppBar'

describe('AppBar', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const AppBar = withTestProps<IAppBar>(AppBarComp)
    const InnerScreen = () => (
      <View testID="Root">
        <AppBar
          testID="AppBar"
          title="Appbar header title"
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
