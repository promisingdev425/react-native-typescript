import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { ApplicationIcon } from '~/assets/images'

import { LeaderboardItem } from './LeaderboardItem'

describe('LeaderboardItem', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock
  let leaderboardItem
  const option = {
    Icon: ApplicationIcon,
    value: 'application',
    label: 'Engagement Score',
  }

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <LeaderboardItem option={option} onPress={handlePress} height={48} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    leaderboardItem = screen.getByA11yRole('button')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(leaderboardItem)
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(option.label),
    )
  })
})
