import React from 'react'
import { View } from 'react-native'

import { centered } from '~/storybook-utils'

import { BenchmarkChart } from './BenchmarkChart'

export default {
  title: 'Components/BenchmarkChart',
  component: BenchmarkChart,
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

// The first export will be used as the main story on the page.
export const Template = (props) => <BenchmarkChart {...props} />
Template.storyName = 'BenchmarkChart'
Template.decorators = [centered]
Template.parameters = {
  // Open the source code for the first story
  docs: {source: {state: 'open'}},
}

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
