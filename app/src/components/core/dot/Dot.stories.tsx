import React from 'react'

import { centered } from '~/storybook-utils'

import { Dot } from './Dot'

export default {
  title: 'Components/Dot',
  component: Dot,
  argTypes: {},
  args: {
    size: 20,
    color: 'red',
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

export const Template = (props) => <Dot {...props} />
Template.storyName = 'Dot'
Template.decorators = [centered]
Template.parameters = {
  docs: { source: { state: 'open' } },
}
