import React from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { Box } from './Box'

// Component Native Stories
storiesOf('Box', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('Pink', () => (
    <Box bg="brandPink" p={5} borderRadius={5}>
      <Text>This is a brandPink Box</Text>
    </Box>
  ))
  .add('Orange', () => (
    <Box bg="brandOrange" p={5} borderRadius={5}>
      <Text>This is a brandOrange Box</Text>
    </Box>
  ))
