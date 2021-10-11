import React from 'react'

import { centered } from '~/storybook-utils'

import { IconButton } from './IconButton'
import { Icons } from '~/assets'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {},
  args: {
    onPress: () => console.log('hit Circular arrow button'),
    icon: <Icons.CircularArrow testID="IconButton" color="#333" />
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

export const Template = (props) => <IconButton {...props} />
Template.storyName = 'IconButton'
Template.decorators = [centered]
Template.parameters = {
  docs: { source: { state: 'open' } },
}

export const Template1 = (props) => <IconButton {...props} />
Template1.storyName = 'IconButton with text'
Template1.decorators = [centered]
Template1.parameters = {
  docs: { source: { state: 'open' } },
}
Template1.args = {
  icon: <Icons.CircularArrow testID="IconButton" color="#567" style={{ transform: [{ rotate: '180deg' }] }} />,
  text: 'reports',
}
