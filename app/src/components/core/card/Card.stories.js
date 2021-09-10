import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Card, InnerCard } from './Card'
import { Text } from '../text'

// Component Native Stories
storiesOf('Card', module)
  .add('Has title', () => (
    <Card title="Card 1" bg="lightGray">
      <Text color="brandPink">Test</Text>
    </Card>
  ))
  .add('No title', () => (
    <InnerCard bg="lightGray" m="sm">
      <Text color="brandOrange">Test</Text>
    </InnerCard>
  ))
