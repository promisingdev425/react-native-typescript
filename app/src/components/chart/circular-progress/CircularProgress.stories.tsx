import React from 'react'

import { centered } from '~/storybook-utils'

import { CircularProgress } from './CircularProgress'

export default {
  title: 'Components/Charts/CircularProgress',
  component: CircularProgress,
  // You can use argTypes to further customize the controls
  // in the storybook if you need.
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // Default props for your stories.
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {
    progress: 0.84,
    isFull: true,
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

// The first export will be used as the main story on the page.
export const Template = (props) => <CircularProgress {...props} />
Template.storyName = 'CircularProgress'
Template.decorators = [centered]
Template.parameters = {
  // Open the source code for the first story
  docs: { source: { state: 'open' } },
}

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
