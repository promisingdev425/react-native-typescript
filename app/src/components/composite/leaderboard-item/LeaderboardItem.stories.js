import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { LeaderboardItem } from './LeaderboardItem'

// Component Native Stories
storiesOf('LeaderboardItem', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => <LeaderboardItem />)
