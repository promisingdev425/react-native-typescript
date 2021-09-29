import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'
import { Icons } from '~/assets'

import { AppBar } from './AppBar'

describe('AppBar', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <AppBar
          title="Appbar header title"
          leftItem={<Icons.Property />}
          rightItem={<Icons.Property />}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('Appbar header title'),
    )
  })
})
