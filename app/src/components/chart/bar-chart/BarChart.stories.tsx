import React from 'react'

import { centered, themeColorControl } from '~/storybook-utils'

import { BarChart } from './BarChart'

export default {
  title: 'Components/Charts/BarChart',
  component: BarChart,
  // You can use argTypes to further customize the controls
  // in the storybook if you need.
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    strokeColor: themeColorControl,
    gridColor: themeColorControl,
    activeGridColor: themeColorControl,
  },
  // Default props for your stories.
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {
    title: 'Bar Chart',
    width: '500px',
    gridColor: 'lightGray',
    values: [
      { key: 0, value: -20, label: 'January' },
      { key: 1, value: 120, label: 'Februray' },
      { key: 2, value: 180, label: 'March' },
      { key: 3, value: 130, label: 'April' },
      { key: 4, value: 140, label: 'May' },
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
