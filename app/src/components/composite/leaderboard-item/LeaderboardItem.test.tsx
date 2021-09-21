import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { ILeaderboardItemData, LeaderboardItem } from './LeaderboardItem'

describe('LeaderboardItem', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock
  let leaderboardItem
  const data: ILeaderboardItemData = {
    name: 'Bellaire Ranch',
    categories: [
      { name: 'Occupancy', awarded: 40, possible: 50 },
      { name: 'Leasing', awarded: 40, possible: 50 },
      { name: 'Rents', awarded: 40, possible: 50 },
      { name: 'Renewals', awarded: 40, possible: 50 },
      { name: 'Marketing', awarded: 40, possible: 50 },
      { name: 'Maintenance', awarded: 40, possible: 50 },
      { name: 'Satisfaction', awarded: 40, possible: 50 },
      { name: 'Financials', awarded: 40, possible: 50 },
    ],
    rank: 1,
  }

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <LeaderboardItem data={data} onPress={handlePress} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    leaderboardItem = screen.getByA11yRole('button')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(leaderboardItem)
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(data.name),
    )
  })
})
