import React from 'react'

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

export const Template = (props) => <List {...props}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</List>

Template.storyName = 'List'
Template.decorators = [centered]
Template.parameters = {
  docs: {source: {state: 'open'}},
}
