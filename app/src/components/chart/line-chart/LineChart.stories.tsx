import React from 'react'

import { centered, themeColorControl } from '~/storybook-utils'

import { LineChart } from './LineChart'

export default {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  argTypes: {
    strokeColor: themeColorControl,
    gridColor: themeColorControl,
    activeGridColor: themeColorControl,
  },
  args: {
    title: 'Average Rent',
    width: '500px',
    strokeWidth: 2,
    strokeColor: 'brandPink',
    gridColor: 'lightGray',
    activeGridColor: 'brandPink',
    activeGridIndex: 3,
    values: [
      { key: 0, value: 100, label: 'J' },
      { key: 1, value: 120, label: 'F' },
      { key: 2, value: 120, label: 'M' },
      { key: 3, value: 130, label: 'A' },
      { key: 4, value: 140, label: 'M' },
      { key: 5, value: 110, label: 'J' },
      { key: 6, value: 120, label: 'J' },
      { key: 7, value: 130, label: 'A' },
      { key: 8, value: 140, label: 'S' },
      { key: 9, value: 150, label: 'O' },
      { key: 10, value: 110, label: 'N' },
      { key: 11, value: 100, label: 'D' },
    ],
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

// The first export will be used as the main story on the page.
export const Template = (props) => <LineChart {...props} />
Template.storyName = 'LineChart'
Template.decorators = [centered]
Template.parameters = {
  // Open the source code for the first story
  docs: { source: { state: 'open' } },
}

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
