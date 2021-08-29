import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { Box } from './Box.jsx'

const Container = styled(Box).attrs({
  bg: 'negative',
  p: 6,
})``

// Component Native Stories
storiesOf('Box', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <Container>
      <Box bg="brandPink" p={5} borderRadius={5}>
        <Text>This is a brandPink Box</Text>
      </Box>

      <Box bg="brandOrange" p={5} borderRadius={5}>
        <Text>This is a brandOrange Box</Text>
      </Box>
    </Container>
  ))
