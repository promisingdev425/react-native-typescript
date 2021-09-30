import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { LeaderboardItem } from './LeaderboardItem'

// Component Native Stories
storiesOf('LeaderboardItem', module)
  .add('Top rank', () => (
    <LeaderboardItem
      id="rank1"
      name="Stephen Curry"
      rank={1}
      score={90}
      benchmark={{ minPositive: 90, minWarning: 80, minNegative: 40 }}
      onPress={(data) => console.log(data)}
    />
  ))
  .add('General rank', () => (
    <LeaderboardItem
      id="rank2"
      name="Klay Thompson"
      rank={2}
      score={85}
      benchmark={{ minPositive: 90, minWarning: 80, minNegative: 40 }}
      onPress={(data) => console.log(data)}
    />
  ))
  .add('No Benchmark scores', () => (
    <LeaderboardItem
      id="rank3"
      name="Klay Thompson"
      rank={5}
      score={85}
      dotSize={10}
      onPress={(data) => console.log(data)}
    />
  ))
