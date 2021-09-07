import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { IconButton } from './IconButton'

// Component Native Stories
storiesOf('IconButton', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => <IconButton />)
