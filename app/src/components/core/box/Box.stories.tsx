import React from 'react'
import { Text } from 'react-native'

import { Box, IBox } from './Box'

import {
  spaceArgTypes,
  backgroundColorArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  viewArgTypes,
  flexboxArgTypes,
  layoutArgTypes,
  positionArgTypes,
} from '~/storybook-utils'

export const boxArgTypes = {
  ...viewArgTypes,
  ...spaceArgTypes,
  ...backgroundColorArgTypes,
  ...borderArgTypes,
  ...backgroundArgTypes,
  ...layoutArgTypes,
  ...flexboxArgTypes,
  ...positionArgTypes,
}

export default {
  title: 'Components/Core/Box',
  component: Box,
  argTypes: {
    children: {
      description: 'You can pass any JSX content as the Box children.',
      control: 'text',
    },
    ...boxArgTypes,
  },
  excludeStories: /.*ArgTypes/,
  parameters: {
    controls: { sort: 'requiredFirst' },
  }
}

export const Template = (props: IBox) => <Box {...props} />
Template.storyName = 'Box'
Template.parameters = {
  docs: { source: { state: 'open' } },
}
Template.args = {
  border: '1px dashed black',
  padding: 'sm',
  children: <Text>This is a box with Text children</Text>,
}
