import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Centered } from '~/storybook-utils';

import { Box } from './Box.jsx';

// Component Native Stories
storiesOf('Box', module)
  .addDecorator(cb => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <Box />
  ));
