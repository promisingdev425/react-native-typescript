import React from 'react'
import { View } from 'react-native'
import {
  render,
  fireEvent,
  waitFor,
  RenderAPI,
} from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { ILeaderboardItemData, LeaderboardItem } from './LeaderboardItem'

describe('LeaderboardItem', function () {
  let screen: RenderAPI
  let handleTopRankPress: jest.Mock
  let handleGeneralRankPress: jest.Mock
  let topRankLeaderboardItem, generalRankLeaderboardItem

  const topRankData: ILeaderboardItemData = {
    name: 'Bellaire Ranch',
    categories: [
      { name: 'Occupancy', awarded: 46, possible: 50 },
      { name: 'Leasing', awarded: 47, possible: 50 },
      { name: 'Rents', awarded: 48, possible: 50 },
      { name: 'Renewals', awarded: 45, possible: 50 },
      { name: 'Marketing', awarded: 46, possible: 50 },
      { name: 'Maintenance', awarded: 48, possible: 50 },
      { name: 'Satisfaction', awarded: 50, possible: 50 },
      { name: 'Financials', awarded: 44, possible: 50 },
    ],
    rank: 2,
    accessibilityLabel: 'TopRankedData',
  }

  const topRankData1: ILeaderboardItemData = {
    name: 'Stephen Curry',
    categories: [
      { name: 'Occupancy', awarded: 46, possible: 50 },
      { name: 'Leasing', awarded: 47, possible: 50 },
      { name: 'Rents', awarded: 48, possible: 50 },
      { name: 'Renewals', awarded: 45, possible: 50 },
      { name: 'Marketing', awarded: 46, possible: 50 },
      { name: 'Maintenance', awarded: 48, possible: 50 },
      { name: 'Satisfaction', awarded: 50, possible: 50 },
      { name: 'Financials', awarded: 44, possible: 50 },
    ],
    rank: 1,
    accessibilityLabel: 'TopRankedData1',
  }

  const generalRankData: ILeaderboardItemData = {
    name: 'Anthony Verhoeven',
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
    rank: 5,
    accessibilityLabel: 'GeneralRankedData',
  }

  beforeEach(() => {
    handleTopRankPress = jest.fn()
    handleGeneralRankPress = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <LeaderboardItem data={topRankData} onPress={handleTopRankPress} />
        <LeaderboardItem data={topRankData1} onPress={handleTopRankPress} />
        <LeaderboardItem
          data={generalRankData}
          onPress={handleGeneralRankPress}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    topRankLeaderboardItem = screen.getByA11yLabel(
      topRankData.accessibilityLabel,
    )
    generalRankLeaderboardItem = screen.getByA11yLabel(
      generalRankData.accessibilityLabel,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(topRankLeaderboardItem)

    expect(screen.getByTestId('Root')).toContainElement(
      generalRankLeaderboardItem,
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(topRankData.name),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(generalRankData.name),
    )
  })

  it('should trigger prev and next button', () => {
    fireEvent.press(topRankLeaderboardItem)
    expect(handleTopRankPress).toHaveBeenLastCalledWith(topRankData)

    fireEvent.press(generalRankLeaderboardItem)
    expect(handleGeneralRankPress).toHaveBeenLastCalledWith(generalRankData)
  })

  it('should trigger PressIn and PressOut actions inside component', async () => {
    fireEvent(topRankLeaderboardItem, 'pressIn')

    await waitFor(() => fireEvent(topRankLeaderboardItem, 'pressOut'))
  })
})
