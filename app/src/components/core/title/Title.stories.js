import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Centered } from '~/storybook-utils';

import { Title } from './Title.jsx';

// Component Native Stories
storiesOf('Title', module)
  .addDecorator(cb => <Centered>{cb()}</Centered>)
  .add('by variants', () => (
    <>
      <Title variant="navigation" pt={3}>This is [navigation] title</Title>
      <Title variant="header" color="positive" pt={3}>This is [header] title</Title>
      <Title variant="section" color="warning" pt={3}>This is [section] title</Title>
      <Title variant="body" color="negative" pt={3}>This is [body] title</Title>
    </>
  ));
