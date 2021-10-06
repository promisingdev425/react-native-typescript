import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI, within } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Dot } from './Dot'

describe('Dot', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <Dot testID="Dot" color="positive" />
        <Dot testID="Dot1" color="positive" hasOuterLayer={true} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Dot'),
    )
  })

  it('should hide and show outer layer', () => {
    expect(within(screen.getByTestId('Dot')).queryByTestId('DotOuterLayer')).toBeNull()
    expect(screen.getByTestId('Dot1')).toContainElement(
      screen.getByTestId('DotOuterLayer'),
    )
  })

})
