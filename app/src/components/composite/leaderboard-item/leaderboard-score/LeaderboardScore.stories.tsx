import React from 'react'

import { centered } from '~/storybook-utils'

import { LeaderboardScore } from './LeaderboardScore'

export default {
  title: 'Components/LeaderboardScore',
  component: LeaderboardScore,
  // You can use argTypes to further customize the controls
  // in the storybook if you need.
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // Default props for your stories.
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {},
}

// The first export will be used as the main story on the page.
export const Template = (props) => <LeaderboardScore {...props} />
Template.storyName = 'LeaderboardScore'
Template.decorators = [centered]

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
