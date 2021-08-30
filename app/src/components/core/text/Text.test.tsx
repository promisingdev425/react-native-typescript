import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { withTestProps } from '~/utils'

import { Text as TextComp } from './Text'

describe('Text', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const Text = withTestProps(TextComp)
    const InnerScreen = () => (
      <View testID="RootText">
        <Text testID="Text" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('RootText')).toContainElement(
      screen.getByTestId('Text'),
    )
  })
})
