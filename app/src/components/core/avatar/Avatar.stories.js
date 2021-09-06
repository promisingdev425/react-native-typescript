import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { Avatar } from './Avatar'

// Component Native Stories
storiesOf('Avatar', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <Avatar
      source={{ uri: 'https://avatars.githubusercontent.com/u/20338216?v=4' }}
    />
  ))
