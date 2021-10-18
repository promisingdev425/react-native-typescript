import React from 'react'
import { Button } from 'react-native'

import { centered } from '~/storybook-utils'

import { List } from './List'

import { Text } from '../text'

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
  args: {},
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

export const Template = (props) => (
  <List {...props}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
  </List>
)
Template.storyName = 'List'
Template.decorators = [centered]
Template.parameters = {
  docs: { source: { state: 'open' } },
}

export const Template1 = (props) => (
  <List {...props}>
    <Button title="Learn More" />
    <Button title="Learn More" />
  </List>
)
Template1.storyName = 'List w/ Buttons'
Template1.decorators = [centered]
Template1.parameters = {
  docs: { source: { state: 'open' } },
}
