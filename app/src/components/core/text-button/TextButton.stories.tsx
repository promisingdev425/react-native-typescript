import React from 'react'

import { centered } from '~/storybook-utils'

import { TextButton } from './TextButton'

export default {
  title: 'Components/TextButton',
  component: TextButton,
  argTypes: {},
  args: {
    children: 'Browse All Reports'
  },
  parameters: {
    controls: { sort: 'requiredFirst' }
  },
}

export const Template = (props) => <TextButton {...props} />
Template.storyName = 'TextButton'
Template.decorators = [centered]
Template.parameters = {
  docs: {source: {state: 'open'}},
}
