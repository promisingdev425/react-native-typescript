import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Splash } from './Splash.jsx';

// Component Native Stories
storiesOf('Splash', module)
  .add('default', () => (
    <Splash />
  ));
