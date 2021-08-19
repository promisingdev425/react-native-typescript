import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Centered } from '~/storybook-utils';

import { AppBar } from './AppBar.jsx';

// Component Native Stories
storiesOf('AppBar', module)
  .addDecorator(cb => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <AppBar />
  ));
