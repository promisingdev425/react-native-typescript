import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PropertyIcon } from '~/assets/images'

import { AppBar } from './AppBar.jsx';

// Component Native Stories
storiesOf('AppBar', module)
  .add('default', () => (
    <AppBar leftItem={<PropertyIcon/>}/>
  ));
