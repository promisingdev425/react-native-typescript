import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { HeaderBar } from './HeaderBar'

// Component Native Stories
storiesOf('HeaderBar', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <HeaderBar
      title="Property Leaderboard"
      avatar={{
        name: 'John Doe',
        image: 'https://avatars.githubusercontent.com/u/20338216?v=4',
        bg: 'lightGray',
      }}
    />
  ))
