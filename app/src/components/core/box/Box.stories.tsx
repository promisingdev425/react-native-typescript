import React from 'react'
import { Text } from 'react-native'

import { Box, IBox } from './Box'

import { themes } from '~/theme';
import {
  spaceArgTypes,
  backgroundColorArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  viewArgTypes,
} from '~/storybook-utils';

export const boxArgTypes = {
  ...viewArgTypes,
  ...spaceArgTypes,
  ...backgroundColorArgTypes,
  ...borderArgTypes,
  ...backgroundArgTypes,
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
}

export const Template = (props: IBox) => <Box {...props} />
Template.storyName = 'Box'
Template.parameters = {
  docs: {source: {state: 'open'}},
}
Template.args = {
  border: '1px dashed black',
  p: 'sm',
  children: <Text>This is a box with Text children</Text>,
}

