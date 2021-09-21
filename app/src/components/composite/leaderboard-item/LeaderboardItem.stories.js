import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { LeaderboardItem } from './LeaderboardItem'

// Component Native Stories
storiesOf('LeaderboardItem', module)
  .add('Top rank', () => (
    <LeaderboardItem
      data={{
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
      }}
      onPress={(data) => console.log(data)}
    />
  ))
  .add('General rank', () => (
    <LeaderboardItem
      data={{
        name: 'Bellaire Ranch',
        categories: [
          { name: 'Occupancy', awarded: 40, possible: 50 },
          { name: 'Leasing', awarded: 30, possible: 50 },
          { name: 'Rents', awarded: 40, possible: 50 },
          { name: 'Renewals', awarded: 30, possible: 50 },
          { name: 'Marketing', awarded: 20, possible: 50 },
          { name: 'Maintenance', awarded: 40, possible: 50 },
          { name: 'Satisfaction', awarded: 40, possible: 50 },
          { name: 'Financials', awarded: 50, possible: 50 },
        ],
        rank: 4,
      }}
      onPress={(data) => console.log(data)}
    />
  ))
