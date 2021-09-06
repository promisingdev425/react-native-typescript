import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'
import { userPlaceholder } from '~/assets/images'

import { Avatar } from './Avatar'

describe('Avatar', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <Avatar testID="Avatar" source={userPlaceholder} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Avatar'),
    )
  })
})
