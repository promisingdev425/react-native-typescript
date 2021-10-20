import React from 'react'

import { centered } from '~/storybook-utils'
import { themes } from '~/theme'

import { PieChart } from './PieChart'

export default {
  title: 'Components/Charts/PieChart',
  component: PieChart,
  // You can use argTypes to further customize the controls
  // in the storybook if you need.
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // Default props for your stories.
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {
    values: [
      {
        key: 1,
        value: 8,
        label: 'Renewed',
        color: themes.light.colors.brandPink,
      },
      {
        key: 2,
        value: 2,
        label: 'MTM',
        color: themes.light.colors.brandOrange,
      },
      {
        key: 3,
        value: 1,
        label: 'Skipped',
        color: themes.light.colors.orangeOverlay,
      },
      {
        key: 4,
        value: 8,
        label: 'Notice to vocate',
        color: themes.light.colors.textPrimary,
      },
      {
        key: 5,
        value: 22,
        label: 'Pending',
        color: themes.light.colors.lightGray,
      },
    ],
    height: 250,
    title: 'Lease expirations',
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

// The first export will be used as the main story on the page.
export const Template = (props) => <PieChart {...props} />
Template.storyName = 'PieChart'
Template.decorators = [centered]
Template.parameters = {
  // Open the source code for the first story
  docs: { source: { state: 'open' } },
}

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
