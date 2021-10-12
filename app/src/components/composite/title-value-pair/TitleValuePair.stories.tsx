import React from 'react'

import { centered } from '~/storybook-utils'

import { TitleValuePair } from './TitleValuePair'

export default {
  title: 'Components/TitleValuePair',
  component: TitleValuePair,
  argTypes: {},
  args: {
    value: 91,
    title: 'Occupancy',
    hasDot: true,
    dotColor: 'positive',
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

export const Template = (props) => <TitleValuePair {...props} />
Template.storyName = 'Value w/ Dot'
Template.decorators = [centered]
Template.parameters = {
  docs: { source: { state: 'open' } },
}

export const Template1 = (props) => <TitleValuePair {...props} />
Template1.storyName = 'Float and No Dot'
Template1.decorators = [centered]
Template1.parameters = {
  docs: { source: { state: 'open' } },
}
Template1.args = {
  value: '3.6 Days',
  isPercentage: false,
  title: 'Score',
  hasDot: false,
}
