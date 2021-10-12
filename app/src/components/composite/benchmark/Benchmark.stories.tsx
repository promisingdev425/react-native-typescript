import React from 'react'
import { View } from 'react-native'

import { centered } from '~/storybook-utils'

import { Benchmark } from './Benchmark'

export default {
  title: 'Components/Benchmark',
  component: Benchmark,
  argTypes: {},
  args: {
    minimum: 0,
    maximum: 100,
    negative: 25,
    positive: 75,
    value: 30,
    isPercentage: true
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

export const Template = (props) => <Benchmark {...props} />
Template.storyName = 'Benchmark'
Template.decorators = [centered]
Template.parameters = {
  docs: {source: {state: 'open'}},
}
