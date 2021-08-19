import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Centered } from '~/storybook-utils';

import { Text } from './Text.jsx';

// Component Native Stories
storiesOf('Text', module)
  .addDecorator(cb => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <Text>This is generic text component</Text>
  ));
