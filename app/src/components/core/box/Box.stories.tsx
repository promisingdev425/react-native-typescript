import React from 'react'
import { Text } from 'react-native'

import { Box, IBox } from './Box'

import { themes } from '~/theme';
import {
  spaceArgTypes,
  colorArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  viewArgTypes,
} from '~/storybook-utils';

console.log('themes?', themes.light);

export const boxArgTypes = {
  children: {
    description: 'You can pass any JSX content as the Box children.',
    control: 'text',
  },
  ...viewArgTypes,
  ...spaceArgTypes,
  ...colorArgTypes,
  ...borderArgTypes,
  ...backgroundArgTypes,
}

export default {
  title: 'Components/Core/Box',
  component: Box,
  argTypes: boxArgTypes,
  excludeStories: /.*ArgTypes/,
}

export const Template = (props: IBox) => <Box {...props} />
Template.storyName = 'Box'
Template.args = {
  border: '1px dashed black',
  p: 'sm',
  children: <Text>This is a box with Text children</Text>,
}

