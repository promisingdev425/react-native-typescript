import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { Avatar } from './Avatar'

// Component Native Stories
storiesOf('Avatar', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('Image from url', () => (
    <Avatar
      name="John Doe"
      size="md"
      image="https://avatars.githubusercontent.com/u/20338216?v=4"
      bg="brandPink"
    />
  ))
  .add('Placeholder', () => <Avatar name="John Doe" bg="lightGray" size="md" />)
