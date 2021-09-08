import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'
import { CircularArrowIcon } from '~/assets/images'

import { IconButton } from './IconButton'

// Component Native Stories
storiesOf('IconButton', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('Prev Arrow', () => (
    <IconButton onPress={() => console.log('hit Circular arrow button')}>
      <CircularArrowIcon testID="IconButton" color="#333" />
    </IconButton>
  ))
  .add('Next Arrow', () => (
    <IconButton
      onPress={() => console.log('hit Circular arrow button')}
      style={{ transform: [{ rotate: '180deg' }] }}
    >
      <CircularArrowIcon testID="IconButton" color="#567" />
    </IconButton>
  ))
