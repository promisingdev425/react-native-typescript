import React from 'react'

import { centered, colorArgTypes } from '~/storybook-utils'

import { BarChart } from './BarChart'

export default {
  title: 'Components/BarChart',
  component: BarChart,
  // You can use argTypes to further customize the controls
  // in the storybook if you need.
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    strokeColor: colorArgTypes.color,
    gridColor: colorArgTypes.color,
    activeGridColor: colorArgTypes.color,
  },
  // Default props for your stories.
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {
    strokeWidth: 2,
    strokeColor: 'brandPink',
    gridColor: 'lightGray',
    activeGridColor: 'brandPink',
    activeGridIndex: 3,
    values: [
      { value: 100, label: 'January' },
      { value: 120, label: 'Februray' },
      { value: -120, label: 'March' },
      { value: 130, label: 'April' },
      { value: 140, label: 'May' },
      // { value: -110, label: 'June' },
      // { value: -120, label: 'July' },
      // { value: 130, label: 'August' },
      // { value: 140, label: 'September' },
      // { value: 150, label: 'October' },
      // { value: 110, label: 'November' },
      // { value: 100, label: 'December' },
    ],
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

// The first export will be used as the main story on the page.
export const Template = (props) => <BarChart {...props} />
Template.storyName = 'BarChart'
Template.decorators = [centered]
Template.parameters = {
  // Open the source code for the first story
  docs: { source: { state: 'open' } },
}

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
