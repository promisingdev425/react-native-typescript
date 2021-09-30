import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { LeaderboardScore } from './LeaderboardScore'

describe('LeaderboardScore', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <LeaderboardScore
          testID="LeaderboardScore"
          fontSize="body1"
          dotSize={6}
          score={96}
          benchmark={{ minPositive: 90, minWarning: 80, minNegative: 40 }}
        />

        <LeaderboardScore
          testID="LeaderboardScore1"
          fontSize="body1"
          dotSize={6}
          score={85}
          benchmark={{ minPositive: 90, minWarning: 80, minNegative: 40 }}
        />

        <LeaderboardScore
          testID="LeaderboardScore2"
          fontSize="body1"
          dotSize={6}
          score={45}
          benchmark={{ minPositive: 90, minWarning: 80, minNegative: 40 }}
        />

        <LeaderboardScore
          testID="LeaderboardScore3"
          fontSize="body1"
          dotSize={6}
          score={10}
          benchmark={{ minPositive: 90, minWarning: 80, minNegative: 40 }}
        />

        <LeaderboardScore
          testID="LeaderboardScoreNoBenchmark"
          dotSize={10}
          fontSize="body1"
          score={10}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('LeaderboardScore'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('LeaderboardScore1'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('LeaderboardScore2'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('LeaderboardScore3'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('LeaderboardScoreNoBenchmark'),
    )
  })
})
