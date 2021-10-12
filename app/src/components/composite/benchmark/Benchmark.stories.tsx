import React from 'react'
import { View } from 'react-native'

import { centered } from '~/storybook-utils'

import { Benchmark } from './Benchmark'

export default {
  title: 'Components/Benchmark',
  component: Benchmark,
  argTypes: {},
  args: {
    indicatorPosition: .5,
    indicatorLabel: '50%',
    colorBarNegativeLabel: '0-5 pts',
    colorBarWarningLabel: '6-9 pts',
    colorBarPositiveLabel: '10 pts',
    dividerNegativeLabel: '72%',
    dividerWarningLabel: '80%',
    dividerPositiveLabel: '92%'
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
