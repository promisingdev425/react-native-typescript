import React from 'react'
import styled from 'styled-components/native'
import { flexbox } from 'styled-system'

import { Avatar } from './Avatar'
import { Box } from '../box'
import { Text } from '../text'

const Row = styled(Box)`
  flex-direction: row;
  align-items: center;
`

export default {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    name: 'John Doe',
    size: 'sm',
    image: 'https://avatars.githubusercontent.com/u/20338216?v=4',
    bg: 'lightGray',
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

export const Template = props => <Avatar {...props} />;
Template.storyName = 'Avatar';

export const WithoutProfileImage = Template.bind({});
WithoutProfileImage.args = {image: undefined};

export const SizeVariations = props =>
  ['xs', 'sm', 'md', 'lg'].map(size =>
    <Row m={10} key={size}>
      <Text width={100} fontSize="h3">Size: { size }</Text>
      <Avatar {...props} size={size} m={10} />
      <Avatar {...props} image={undefined} size={size} m={10} />
    </Row>
  );
SizeVariations.args = {size: undefined};
