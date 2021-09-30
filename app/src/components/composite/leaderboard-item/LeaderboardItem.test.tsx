import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { LeaderboardItem } from './LeaderboardItem'

describe('LeaderboardItem', function () {
  let screen: RenderAPI
  let handleTopRankPress: jest.Mock
  let handleGeneralRankPress: jest.Mock
  let topRankLeaderboardItem, generalRankLeaderboardItem

  const leaderboard1 = {
    id: 'leaderboard-item1',
    name: 'Bellaire Ranch',
    score: 92,
    rank: 1,
    benchmark: { minPositive: 90, minWarning: 80, minNegative: 40 },
    accessibilityLabel: 'LeaderboardRank1',
  }

  const leaderboard2 = {
    id: 'leaderboard-item2',
    name: 'Stephen Curry',
    score: 88,
    rank: 3,
    benchmark: { minPositive: 90, minWarning: 80, minNegative: 40 },
    accessibilityLabel: 'LeaderboardRank2',
  }

  const leaderboard3 = {
    id: 'leaderboard-item3',
    name: 'Klay Thompson',
    score: 70,
    rank: 5,
    accessibilityLabel: 'LeaderboardRank3',
  }

  beforeEach(() => {
    handleTopRankPress = jest.fn()
    handleGeneralRankPress = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <LeaderboardItem onPress={handleTopRankPress} {...leaderboard1} />
        <LeaderboardItem onPress={handleTopRankPress} {...leaderboard2} />
        <LeaderboardItem onPress={handleGeneralRankPress} {...leaderboard3} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    topRankLeaderboardItem = screen.getByA11yLabel(
      leaderboard1.accessibilityLabel,
    )
    generalRankLeaderboardItem = screen.getByA11yLabel(
      leaderboard3.accessibilityLabel,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(topRankLeaderboardItem)

    expect(screen.getByTestId('Root')).toContainElement(
      generalRankLeaderboardItem,
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(leaderboard1.name),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(leaderboard3.name),
    )
  })

  it('should trigger prev and next button', () => {
    fireEvent.press(topRankLeaderboardItem)
    expect(handleTopRankPress).toHaveBeenLastCalledWith(leaderboard1.id)

    fireEvent.press(generalRankLeaderboardItem)
    expect(handleGeneralRankPress).toHaveBeenLastCalledWith(leaderboard3.id)
  })
})
