import React from 'react'
import { View } from 'react-native'

import { centered } from '~/storybook-utils'

import { Benchmark } from './Benchmark'

export default {
  title: 'Components/Charts/Benchmark',
  component: Benchmark,
  argTypes: {},
  args: {
    indicatorPosition: 0.7,
    indicatorLabel: '88%',
    colorBarNegativeLabel: '0-5 pts',
    colorBarWarningLabel: '6-9 pts',
    colorBarPositiveLabel: '10 pts',
    dividerNegativeLabel: '72%',
    dividerWarningLabel: '80%',
    dividerPositiveLabel: '92%',
    accessibilityLabel: 'this is the a11y label',
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

export const Template = (props) => <Benchmark {...props} />
Template.storyName = 'Benchmark'
Template.decorators = [centered]
Template.parameters = {
  docs: { source: { state: 'open' } },
}
