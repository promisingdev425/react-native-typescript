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
Template1.storyName = 'Dot w/ Outer Layer'
Template1.decorators = [centered]
Template1.parameters = {
  docs: { source: { state: 'open' } },
}
Template1.args = {
  color: 'negative',
  hasOuterLayer: true,
}

export const Template2 = (props) => <Dot {...props} />
Template2.storyName = 'Dot w/ Custom A11y Label'
Template2.decorators = [centered]
Template2.parameters = {
  docs: { source: { state: 'open' } },
}
Template2.args = {
  color: 'purple',
  hasOuterLayer: true,
  accessibilityLabel: 'This is a custom accessibility label',
}
