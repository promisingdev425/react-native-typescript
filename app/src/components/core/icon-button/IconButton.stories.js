import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'
import { Icons } from '~/assets'

import { IconButton } from './IconButton'

// Component Native Stories
storiesOf('IconButton', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('Prev Arrow', () => (
    <IconButton onPress={() => console.log('hit Circular arrow button')}>
      <Icons.CircularArrow testID="IconButton" color="#333" />
    </IconButton>
  ))
  .add('Next Arrow', () => (
    <IconButton
      onPress={() => console.log('hit Circular arrow button')}
      style={{ transform: [{ rotate: '180deg' }] }}
    >
      <Icons.CircularArrow testID="IconButton" color="#567" />
    </IconButton>
  ))
