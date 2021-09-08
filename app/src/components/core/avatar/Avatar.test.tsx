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
        <Avatar testID="Avatar" name="John Doe" />
        <Avatar
          testID="AvatarXS"
          name="John Doe"
          size="xs"
          source={userPlaceholder}
        />
        <Avatar
          testID="AvatarSM"
          name="John Doe"
          size="sm"
          image="https://avatars.githubusercontent.com/u/20338216?v=4"
        />
        <Avatar
          testID="AvatarMD"
          name="John Doe"
          size="md"
          image="https://avatars.githubusercontent.com/u/20338216?v=4"
        />
        <Avatar
          testID="AvatarLG"
          name="John Doe"
          size="lg"
          image="https://avatars.githubusercontent.com/u/20338216?v=4"
        />
        <Avatar
          testID="AvatarLG"
          name="John Doe"
          size={100}
          image="https://avatars.githubusercontent.com/u/20338216?v=4"
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('AvatarSM'),
    )
  })
})
