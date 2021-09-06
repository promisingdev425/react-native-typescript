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
        <Avatar testID="AvatarXS" source={userPlaceholder} size="xs" />
        <Avatar testID="AvatarSM" source={userPlaceholder} size="sm" />
        <Avatar testID="AvatarMD" source={userPlaceholder} size="md" />
        <Avatar testID="AvatarLG" source={userPlaceholder} size="lg" />
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
