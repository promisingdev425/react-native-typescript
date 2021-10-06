import React from 'react'

import { centered } from '~/storybook-utils'

import { Dot } from './Dot'

export default {
  title: 'Components/Dot',
  component: Dot,
  argTypes: {},
  args: {
    color: 'positive',
    hasOuterLayer: false
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

export const Template1 = (props) => <Dot {...props} />
Template1.storyName = 'Dot with Outer Layer'
Template1.decorators = [centered]
Template1.parameters = {
  docs: { source: { state: 'open' } },
}
Template1.args={ color: 'negative', hasOuterLayer: true}
